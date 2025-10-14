import os
import shutil
from PIL import Image
import argparse

# copy all media (images, m4v, etc) from ressources/images/blender to ressources/images/blender_miniature and resize them to 400*400
# start by deleting the destination directory if it exists
# source directory path, destination directory path, and size are configurable
def resize_and_copy_media(src_dir, dst_dir, size=(400, 400)):
    if os.path.exists(dst_dir):
        shutil.rmtree(dst_dir)
    os.makedirs(dst_dir)
    for filename in os.listdir(src_dir):
        src_path = os.path.join(src_dir, filename)
        dst_path = os.path.join(dst_dir, filename)
        if os.path.isfile(src_path):
            ext = os.path.splitext(filename)[1].lower()
            if ext in ['.jpg', '.jpeg', '.png', '.bmp', '.gif']:
                try:
                    with Image.open(src_path) as img:
                        img = img.resize(size, Image.LANCZOS)
                        img.save(dst_path)
                except Exception as e:
                    print(f"Error resizing image {filename}: {e}")
            else:
                shutil.copy2(src_path, dst_path)

if __name__ == "__main__":
    default_src = "../src/ressources/images/blender"
    default_dst = "../src/ressources/images/blender_miniature"
    default_size = (400, 400)

    parser = argparse.ArgumentParser(description="Copy and resize media files.")
    parser.add_argument("--src", type=str, default=default_src, help="Source directory")
    parser.add_argument("--dst", type=str, default=default_dst, help="Destination directory")
    parser.add_argument("--size", type=int, nargs=2, default=default_size, help="Resize dimensions (width height)")
    args = parser.parse_args()
    resize_and_copy_media(args.src, args.dst, tuple(args.size))