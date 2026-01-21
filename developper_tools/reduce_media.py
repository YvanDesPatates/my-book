import argparse
import os
import subprocess
import sys
from pathlib import Path
from typing import Iterable, Tuple

from PIL import Image

SUPPORTED_IMAGES = {".jpg", ".jpeg", ".png", ".bmp", ".gif"}
SUPPORTED_VIDEOS = {".mp4", ".m4v", ".webm", ".mkv"}

# this script reduces media files (images and videos) provided as arguments

def ensure_out_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def resize_image(src: Path, dst: Path, size: Tuple[int, int]) -> None:
    try:
        with Image.open(src) as img:
            img.thumbnail(size, Image.LANCZOS)
            img.save(dst)
    except Exception as exc:  # pragma: no cover - defensive log
        print(f"[image] Failed {src.name}: {exc}")


def has_ffmpeg() -> bool:
    try:
        subprocess.run(["ffmpeg", "-version"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        return True
    except Exception:
        return False


def transcode_video(src: Path, dst: Path, max_dim: int, crf: int = 30) -> None:
    if not has_ffmpeg():
        print("[video] ffmpeg not found; skipping", src.name)
        return

    scale_filter = f"scale='min(iw,{max_dim})':-2"
    cmd = [
        "ffmpeg", "-y", "-i", str(src),
        "-vf", scale_filter,
        "-c:v", "libx264", "-preset", "medium", "-crf", str(crf),
        "-c:a", "aac", "-b:a", "128k",
        str(dst),
    ]
    print(f"[video] {src.name} -> {dst.name}")
    try:
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError as exc:  # pragma: no cover - defensive log
        print(f"[video] ffmpeg failed for {src.name}: {exc}")


def build_output_name(src: Path, out_dir: Path, prefer_mp4: bool) -> Path:
    base = src.stem + "_mini"
    ext = ".mp4" if prefer_mp4 else src.suffix
    return out_dir / f"{base}{ext}"


def process_paths(paths: Iterable[str], out_dir: Path, image_size: Tuple[int, int], video_width: int, crf: int) -> None:
    ensure_out_dir(out_dir)
    for raw in paths:
        src = Path(raw)
        if not src.exists() or not src.is_file():
            print(f"[skip] Not found or not a file: {raw}")
            continue

        ext = src.suffix.lower()
        if ext in SUPPORTED_IMAGES:
            dst = build_output_name(src, out_dir, prefer_mp4=False)
            resize_image(src, dst, image_size)
            print(f"[image] {src.name} -> {dst.relative_to(out_dir)}")
        elif ext in SUPPORTED_VIDEOS:
            prefer_mp4 = ext == ".mkv" or ext == ".webm"
            dst = build_output_name(src, out_dir, prefer_mp4=True if prefer_mp4 else False)
            transcode_video(src, dst, video_width, crf)
        else:
            print(f"[skip] Unsupported type: {src.name}")


def parse_args(argv: Iterable[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Shrink provided media files into developper_tools folder")
    parser.add_argument("files", nargs="+", help="One or more image/video files to shrink")
    parser.add_argument("--out-dir", default=None, help="Output directory (default: this script folder)")
    parser.add_argument("--size", type=int, nargs=2, metavar=("W", "H"), default=(400, 400), help="Max width/height for images")
    parser.add_argument("--video-width", type=int, default=720, help="Max width for videos; height keeps aspect ratio")
    parser.add_argument("--crf", type=int, default=30, help="CRF for video (lower is higher quality)")
    return parser.parse_args(list(argv))


def main(argv: Iterable[str]) -> int:
    args = parse_args(argv)
    default_out = Path(__file__).resolve().parent
    out_dir = Path(args.out_dir).resolve() if args.out_dir else default_out
    process_paths(args.files, out_dir, tuple(args.size), args.video_width, args.crf)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
