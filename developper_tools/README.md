# Developer Tools README

The resize_images Python script is used to process resources in the `src/ressources/images/blender` directory.

**Warning:** You have to run this script if you have added new content to `src/ressources/images/blender`.

## Usage

```bash
python resize_images.py
```

## Developer setup (virtual environment + dependencies)

Run these commands from the repository root. The examples below change into the `developper_tools` directory first so the virtual environment and installs are local to that folder.

#### FFmpeg (optional but recommended for MKV compression)

The script can transcode `.mkv` files to `.mp4` using `ffmpeg` to reduce file size. `ffmpeg` is a system package (not a Python package) and must be installed separately.

Install ffmpeg on common platforms:

Linux (Debian/Ubuntu):
```bash
sudo apt update && sudo apt install ffmpeg
```

macOS (Homebrew):
```bash
brew install ffmpeg
```

Windows: download a build from https://ffmpeg.org/download.html or use a package manager like choco/scoop.

If `ffmpeg` is not found the script will copy MKV files unchanged.

#### Linux / macOS

```bash
# move into the developer tools folder
cd developper_tools

# create a virtual environment (inside developper_tools/.venv)
python3 -m venv .venv

# activate it
source .venv/bin/activate

# install dependencies
pip install -r requirements.txt

# run the script
python resize_images.py
```

#### Windows (PowerShell)

```powershell
# move into the developer tools folder
Set-Location developper_tools

# create and activate venv (inside developper_tools\.venv)
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# install deps and run
pip install -r requirements.txt
python resize_images.py
```