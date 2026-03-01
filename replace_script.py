import re
import os

filepath = '/Users/adithya/Documents/Adithya Experiments/Portfolio website./index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    html = f.read()

# Nav Logo
html = re.sub(
    r'<div class="nav-logo hover-el"><em>\[</em>.*?<em>\]</em>.*?</div>',
    '<div class="nav-logo hover-el"><em>[</em>ADITHYA<em>]</em> M</div>',
    html
)

# Hero Sub
html = re.sub(
    r'<p class="hero-sub">\[YOUR ROLE\].*?Based in \[YOUR CITY\].</p>',
    '<p class="hero-sub">UI/UX Designer & Creative Developer crafting digital experiences that feel alive. Based in Bangalore, India.</p>',
    html, flags=re.DOTALL
)

# Hero Coords
html = re.sub(
    r'<div class="hero-coords">>_EXECUTE_CREATION<br>\[YOUR CITY\]<br>\[COORDS\]</div>',
    '<div class="hero-coords">>_EXECUTE_CREATION<br>Bangalore<br>12.9716° N, 77.5946° E</div>',
    html
)

# Ticker
html = re.sub(
    r'<span class="ticker-item">\[YOUR ROLE\] <span>✦</span></span>',
    '<span class="ticker-item">UI/UX DESIGNER <span>✦</span></span>',
    html
)
html = re.sub(
    r'<span class="ticker-item">BASED IN \[YOUR CITY\] <span>✦</span></span>',
    '<span class="ticker-item">BASED IN BANGALORE <span>✦</span></span>',
    html
)

# About Tags
html = re.sub(
    r'<div class="about-tags reveal".*?</div>',
    '''<div class="about-tags reveal" style="transition-delay:0.3s">
                        <span class="tag hover-el">UI/UX Design</span>
                        <span class="tag hover-el">AI & LLM</span>
                        <span class="tag hover-el">Web Development</span>
                        <span class="tag hover-el">Product Testing</span>
                        <span class="tag hover-el">Creative Direction</span>
                    </div>''',
    html, flags=re.DOTALL
)

# Bio paragraphs
html = re.sub(
    r'<p class="reveal" style="transition-delay:0.1s">I\'m a multidisciplinary \[YOUR ROLE\].*?</p>',
    '<p class="reveal" style="transition-delay:0.1s">Final year Information Science Engineering student at RNS Institute of Technology with a strong interest in exploring new and upcoming technologies. I enjoy experimenting with AI, LLMs and different tools — out of curiosity and for the fun of it.</p>',
    html, flags=re.DOTALL
)
html = re.sub(
    r'<p class="reveal" style="transition-delay:0.2s">Every project is a chance to push.*?web.</p>',
    '<p class="reveal" style="transition-delay:0.2s">I have a growing passion for UI/UX design, especially creating clean and intuitive user experiences. Always open to learning, building, and collaborating on ideas that blend technology and creativity.</p>',
    html, flags=re.DOTALL
)

# Projects
html = re.sub(
    r'<div class="section-label">Selected Works</div>\s*<div>\s*<div class="project-item.*?</section>',
    '''<div class="section-label">Selected Works</div>
            <div>
                <div class="project-item hover-el" data-image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80">
                    <div>
                        <div class="proj-num">01</div>
                        <div class="proj-title">DISHCOVERY</div>
                        <div class="proj-cat">AI-Powered Recipe & Diet Planner</div>
                        <div class="proj-cat" style="font-size: 0.6rem; margin-top: 0.5rem; opacity: 0.7; text-transform:none; letter-spacing:normal;">Built with Cohere API · BMI & Meal Planning · Allergen Filters</div>
                    </div>
                    <div class="proj-year">2025</div>
                    <div class="proj-arrow">↗</div>
                </div>
                <div class="project-item hover-el" data-image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80">
                    <div>
                        <div class="proj-num">02</div>
                        <div class="proj-title">RESUMEFORGE</div>
                        <div class="proj-cat">AI-Powered Resume Builder</div>
                        <div class="proj-cat" style="font-size: 0.6rem; margin-top: 0.5rem; opacity: 0.7; text-transform:none; letter-spacing:normal;">Built with Python · Streamlit · Firebase · Groq AI · PDF Export</div>
                    </div>
                    <div class="proj-year">2024</div>
                    <div class="proj-arrow">↗</div>
                </div>
                <div class="project-item hover-el" data-image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80">
                    <div>
                        <div class="proj-num">03</div>
                        <div class="proj-title">[COMING SOON]</div>
                        <div class="proj-cat">In Progress</div>
                    </div>
                    <div class="proj-year">2025</div>
                    <div class="proj-arrow">↗</div>
                </div>
                <div class="project-item hover-el" data-image="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80">
                    <div>
                        <div class="proj-num">04</div>
                        <div class="proj-title">[COMING SOON]</div>
                        <div class="proj-cat">In Progress</div>
                    </div>
                    <div class="proj-year">2025</div>
                    <div class="proj-arrow">↗</div>
                </div>
            </div>
        </section>''',
    html, flags=re.DOTALL
)

# Skills
html = re.sub(
    r'<div class="skills-grid" id="skills-grid">.*?</div>',
    '''<div class="skills-grid" id="skills-grid">
                <div class="skill-pill hover-el">UI/UX Design</div>
                <div class="skill-pill hover-el">Web App Development</div>
                <div class="skill-pill hover-el">AI & LLM Exploration</div>
                <div class="skill-pill hover-el">Product Testing</div>
                <div class="skill-pill hover-el">Figma</div>
                <div class="skill-pill hover-el">Python</div>
                <div class="skill-pill hover-el">Streamlit</div>
                <div class="skill-pill hover-el">Firebase</div>
                <div class="skill-pill hover-el">Critical Thinking</div>
                <div class="skill-pill hover-el">Content Development</div>
                <div class="skill-pill hover-el">Problem Solving</div>
                <div class="skill-pill hover-el">Creativity</div>
            </div>''',
    html, flags=re.DOTALL
)

# Contact section
html = re.sub(
    r'<a href="mailto:hello@example.com".*?>hello@example.com</a>',
    '<a href="mailto:adithyamuralitharan@gmail.com" class="contact-email hover-el reveal" style="transition-delay:0.2s">adithyamuralitharan@gmail.com</a>',
    html
)
html = re.sub(
    r'<div class="socials reveal".*?</div>',
    '''<div class="socials reveal" style="transition-delay:0.3s">
                <a href="https://github.com/leafjovial" target="_blank" class="social-link hover-el">GitHub</a>
                <a href="https://www.linkedin.com/in/adithya-m23" target="_blank" class="social-link hover-el">LinkedIn</a>
            </div>''',
    html, flags=re.DOTALL
)

# Footer
html = re.sub(
    r'<div>© 2026 Adithya.*?</div>',
    r'<div>© 2025 ADITHYA M // SYS.VER.1.0 // UPDATE: 2025</div>',
    html
)

html = html.replace('innerText: 5,', 'innerText: 3,')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(html)
