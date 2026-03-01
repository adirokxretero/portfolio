import re
import os

filepath = '/Users/adithya/Documents/Adithya Experiments/Portfolio website./index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Three.js canvas breathing room
html = re.sub(
    r"document\.getElementById\('three-canvas'\)\.style\.opacity = '1';",
    "document.getElementById('three-canvas').style.opacity = '0.55';",
    html
)
html = re.sub(
    r"#three-canvas {\s*position: fixed;\s*top: 0;\s*right: 0;\s*width: 50vw;",
    "#three-canvas {\n            position: fixed;\n            top: 0;\n            left: 50vw;\n            width: 50vw;",
    html
)
if "-webkit-mask-image" not in html:
    html = re.sub(
        r"height: 100vh;\s*pointer-events: none;\s*z-index: 1;\s*opacity: 0;\s*transition: opacity 1\.2s ease;",
        "height: 100vh;\n            pointer-events: none;\n            z-index: 0;\n            opacity: 0;\n            -webkit-mask-image: radial-gradient(ellipse 70% 80% at 70% 40%, black 40%, transparent 80%);\n            transition: opacity 1.2s ease;",
        html
    )

# 2 & 3. Sections overlap & padding
html = re.sub(
    r"\.section {\s*min-height: 100vh;\s*padding: 5vh 8vw;\s*display: flex;\s*flex-direction: column;\s*justify-content: center;\s*position: relative;\s*}",
    ".section {\n            min-height: 100vh;\n            padding: 10vh 3rem;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            position: relative;\n            z-index: 2;\n        }",
    html
)
html = re.sub(
    r"\.section {\s*min-height: 100vh;\s*padding: 0 3rem;\s*display: flex;\s*flex-direction: column;\s*justify-content: center;\s*position: relative;\s*}",
    ".section {\n            min-height: 100vh;\n            padding: 10vh 3rem;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            position: relative;\n            z-index: 2;\n        }",
    html
)

html = re.sub(
    r"#scroll-root {\s*position: fixed;\s*top: 0;\s*left: 0;\s*width: 100%;\s*will-change: transform;\s*}",
    "#scroll-root {\n            position: relative;\n            top: 0;\n            left: 0;\n            width: 100%;\n            will-change: transform;\n            z-index: 2;\n        }",
    html
)

html = re.sub(
    r"#hero {\s*padding-top: 10vh;\s*}",
    "#hero {\n            min-height: 100vh;\n            padding: 12vh 3rem;\n        }",
    html
)

# 4. Contact Fixes
html = re.sub(
    r"#contact {\s*text-align: left;\s*min-height: 80vh;\s*}",
    "#contact {\n            text-align: left;\n            min-height: 80vh;\n            padding-top: 15vh;\n            position: relative;\n            z-index: 10;\n        }",
    html
)

# 5. Vignette (Dark overlay)
vignette_css = '''        body::before {
            content: '';
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: linear-gradient(to right, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.7) 45%, transparent 65%);
            pointer-events: none;
            z-index: 1;
        }'''

if "body::before" not in html:
    html = re.sub(r'body {\s*background: var\(--bg\);', vignette_css + '\n        body {\n            background: var(--bg);', html)

# 6. Email (Double check)
html = re.sub(r'hello@example\.com', 'adithyamuralitharan@gmail.com', html)


with open(filepath, 'w', encoding='utf-8') as f:
    f.write(html)
