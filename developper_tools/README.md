# Developer Tools README

The resize_images Python script is used to process resources in the `src/ressources/images/blender` directory.

**Warning:** You have to run this script if you have added new content to `src/ressources/images/blender`.

## Usage

```bash
python resize_images.py
```

## Developer setup (virtual environment + dependencies)

Run these commands from the repository root. The examples below change into the `developper_tools` directory first so the virtual environment and installs are local to that folder.

Linux / macOS

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

Windows (PowerShell)

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