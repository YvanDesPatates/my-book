# Developer Tools README

The resize_images Python script is used to process resources in the `src/ressources/images/blender` directory. It will generate new resized images and videos in `src/ressources/images/blender_miniature`

**Warning:** You have to run this script if you have added new content to `src/ressources/images/blender`.

An other tool is available to resize only one image, could be usefool for project images. See the Manually reduce one or many images section after setted up the environment.

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

## Reduce all images from blender and save them in blender_miniature folder

#### Linux / macOS

```bash
# move into the developer tools folder
cd developper_tools

# create a virtual environment (inside developper_tools/.venv)
python3 -m venv .venv
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

## Manually reduce one or many images


```bash
cd developper_tools
source .venv/bin/activate
python reduce_media.py ../src/ressources/images/blender/example.jpg ../src/ressources/images/blender/example.mkv
```

this command wil create two things. An image with 400x400 size with path ./example_mini.png and a video with a widht of 720 pixels.

#### Options disponibles

| Option | Valeur par défaut | Description |
| - | - | - |
| `--out-dir` | dossier du script (`developper_tools`) | Dossier de sortie où seront écrits les fichiers réduits |
| `--size W H` | `400 400` | Taille max pour les images (largeur, hauteur), ratio conservé |
| `--video-width` | `720` | Largeur maximale de la vidéo (en px), la hauteur s'ajuste |
| `--crf` | `30` | Qualité vidéo H.264 (plus bas = meilleure qualité, fichier plus lourd) |

#### Exemple avec options et deux fichiers (une image + une vidéo) :

```bash
cd developper_tools
python reduce_media.py \
	../src/ressources/images/blender/photo.png \
	../src/ressources/images/blender/clip.webm \
	--out-dir ./outputs \
	--size 600 600 \
	--video-width 960 \
	--crf 28
```

