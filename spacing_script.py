import re
import os

filepath = '/Users/adithya/Documents/Adithya Experiments/Portfolio website./index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    html = f.read()

# Section Padding
html = re.sub(
    r'\.section {\s*min-height: 100vh;\s*padding: 0 3rem;',
    '.section {\n            min-height: 100vh;\n            padding: 5vh 8vw;',
    html
)

# Hero Space
html = re.sub(
    r'\.hero-sub {\s*font-size: 1\.1rem;\s*font-weight: 400;\s*color: var\(--muted\);\s*max-width: 420px;\s*line-height: 1\.6;\s*margin-bottom: 3\.5rem;',
    '.hero-sub {\n            font-size: 1.25rem;\n            font-weight: 400;\n            color: var(--text);\n            opacity: 0.75;\n            max-width: 500px;\n            line-height: 1.8;\n            margin-bottom: 4.5rem;',
    html
)

# Hero Title Spacing
html = re.sub(
    r'\.hero-title {\s*font-size: clamp\(2rem, 6\.5vw, 6rem\);\s*font-weight: 800;\s*line-height: 0\.9;\s*letter-spacing: -0\.04em;\s*margin-bottom: 2\.5rem;',
    '.hero-title {\n            font-size: clamp(2.5rem, 6.5vw, 6rem);\n            font-weight: 800;\n            line-height: 0.95;\n            letter-spacing: -0.04em;\n            margin-bottom: 3.5rem;',
    html
)


# About Section Spacing
html = re.sub(
    r'\.about-grid {\s*display: grid;\s*grid-template-columns: 1fr 1fr;\s*gap: 6rem;',
    '.about-grid {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 10vw;',
    html
)
html = re.sub(
    r'\.about-right p {\s*font-size: 1\.05rem;\s*font-weight: 400;\s*color: var\(--muted\);\s*line-height: 1\.75;\s*margin-bottom: 1\.5rem;',
    '.about-right p {\n            font-size: 1.25rem;\n            font-weight: 400;\n            color: var(--text);\n            opacity: 0.8;\n            line-height: 1.8;\n            margin-bottom: 2.5rem;',
    html
)

# Projects layout spacing
html = re.sub(
    r'\.project-item {\s*display: grid;\s*grid-template-columns: 3fr 1fr 1fr;\s*align-items: center;\s*padding: 2\.5rem 0;',
    '.project-item {\n            display: grid;\n            grid-template-columns: 3fr 1fr 1fr;\n            align-items: center;\n            padding: 3.5rem 0;',
    html
)

# Contact spacing
html = re.sub(
    r'\.contact-big {\s*font-size: clamp\(2\.5rem, 8vw, 8rem\);\s*font-weight: 800;\s*line-height: 0\.9;\s*letter-spacing: -0\.04em;\s*margin-bottom: 3rem;',
    '.contact-big {\n            font-size: clamp(2.5rem, 8vw, 8rem);\n            font-weight: 800;\n            line-height: 0.95;\n            letter-spacing: -0.04em;\n            margin-bottom: 4rem;',
    html
)

# Mobile overrides spacing 
html = re.sub(
    r'\.section {\s*padding: 0 1\.5rem;\s*}',
    '.section {\n                padding: 5vh 5vw;\n            }',
    html
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(html)
