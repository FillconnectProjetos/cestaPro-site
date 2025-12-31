from PIL import Image
import os

def remove_white_background(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # Change all white (also shades of whites) to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

base_dir = "src/assets"
files = [
    ("icon-instagram.png", "instagram_transparente.png"),
    ("icon-whatsapp.png", "whatsapp_transparente.png"),
    ("icon-facebook.png", "facebook_transparente.png")
]

for input_file, output_file in files:
    input_path = os.path.join(base_dir, input_file)
    output_path = os.path.join(base_dir, output_file)
    remove_white_background(input_path, output_path)
