import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfgen import canvas
import pymupdf

pdf_path = "src/assets/resume.pdf"
jpg_path = "src/assets/resume.jpg"

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            super().showPage()
        super().save()
        print(f"TOTAL_PDF_PAGES:{num_pages}")

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=28,
    bottomMargin=28
)

styles = getSampleStyleSheet()

# Colors matching screenshot perfectly
NAVY = colors.HexColor("#1e3a8a")        # Header & section title color
DARK_TEXT = colors.HexColor("#1e293b")   # Main body text
MUTED_TEXT = colors.HexColor("#475569")  # Dates & subtitle text
LINE_COLOR = colors.HexColor("#94a3b8")  # Section line
LINK_BLUE = colors.HexColor("#2563eb")   # Links color

# Styles
name_style = ParagraphStyle(
    "NameStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=18,
    leading=20,
    textColor=NAVY,
    alignment=1
)

contact_style = ParagraphStyle(
    "ContactStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=MUTED_TEXT,
    alignment=1
)

section_title_style = ParagraphStyle(
    "SectionTitle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.5,
    leading=11,
    textColor=NAVY,
    spaceAfter=1
)

body_text = ParagraphStyle(
    "BodyText",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.5,
    textColor=DARK_TEXT
)

body_bold = ParagraphStyle(
    "BodyBold",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.5,
    leading=11.5,
    textColor=DARK_TEXT
)

body_italic = ParagraphStyle(
    "BodyItalic",
    parent=styles["Normal"],
    fontName="Helvetica-Oblique",
    fontSize=8.5,
    leading=11,
    textColor=MUTED_TEXT
)

bullet_style = ParagraphStyle(
    "BulletText",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.2,
    textColor=DARK_TEXT,
    leftIndent=12,
    firstLineIndent=-7
)

right_date_style = ParagraphStyle(
    "RightDate",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=MUTED_TEXT,
    alignment=2
)

link_style = ParagraphStyle(
    "LinkStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.5,
    textColor=LINK_BLUE
)

story = []

# --- HEADER ---
story.append(Paragraph("MUTHUKUMARAN S", name_style))
story.append(Spacer(1, 4))
contact_str = "Phone: +91 7402200654 &nbsp;|&nbsp; Email: sureshmuthu1212@gmail.com &nbsp;|&nbsp; Location: Coimbatore, India"
story.append(Paragraph(contact_str, contact_style))
story.append(Spacer(1, 6))

def add_section(title_text):
    story.append(Paragraph(title_text, section_title_style))
    story.append(HRFlowable(width="100%", thickness=0.75, color=LINE_COLOR, spaceBefore=2, spaceAfter=4))

# --- CAREER OBJECTIVE ---
add_section("CAREER OBJECTIVE")
obj_text = (
    "Computer Science undergraduate with hands-on experience in Python, JavaScript, and full-stack web development "
    "(React.js, Node.js, MySQL). Skilled at building and deploying web applications end-to-end, with a strong foundation "
    "in problem-solving and a track record of shipping multiple independent projects. Seeking a Software Developer / Web "
    "Developer Intern role to apply and grow these skills in a collaborative engineering team."
)
story.append(Paragraph(obj_text, body_text))
story.append(Spacer(1, 6))

# --- WORK EXPERIENCE ---
add_section("WORK EXPERIENCE")

# Item 1
t1_data = [[
    Paragraph("<b>Python Developer Intern &mdash; Alfido Tech</b>", body_text),
    Paragraph("Aug 2025 &ndash; Sep 2025", right_date_style)
]]
t1 = Table(t1_data, colWidths=[400, 140])
t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t1)
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Wrote and tested Python scripts to automate data processing and backend logic, strengthening core programming and debugging skills.", bullet_style))
story.append(Paragraph("&bull; Collaborated with the development team on assigned modules, following coding best practices and version control workflows using Git.", bullet_style))
story.append(Paragraph("&bull; Debugged and refactored existing code to improve readability and performance.", bullet_style))

story.append(Spacer(1, 4))

# Item 2
t2_data = [[
    Paragraph("<b>Web Developer Intern &mdash; InternPe</b>", body_text),
    Paragraph("Nov 2025 &ndash; Dec 2025", right_date_style)
]]
t2 = Table(t2_data, colWidths=[400, 140])
t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t2)
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Built responsive front-end components using HTML5, CSS3, and JavaScript, translating design requirements into functional UI.", bullet_style))
story.append(Paragraph("&bull; Integrated REST APIs to connect front-end interfaces with backend data, handling API requests and responses.", bullet_style))
story.append(Paragraph("&bull; Worked with React.js to develop reusable components, improving maintainability of the codebase.", bullet_style))

story.append(Spacer(1, 6))

# --- PROJECTS ---
add_section("PROJECTS")

# Project 1
p1_data = [[
    Paragraph("<b>Health Nav</b>", body_text),
    Paragraph("Dec 2025", right_date_style)
]]
tp1 = Table(p1_data, colWidths=[400, 140])
tp1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(tp1)
story.append(Paragraph("<i>Tech Stack: React.js, Node.js, MySQL, API Handling</i>", body_italic))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Built a healthcare web app that recommends the appropriate doctor/specialist based on user-reported symptoms, age, and symptom duration.", bullet_style))
story.append(Paragraph("&bull; Designed the symptom-to-specialist matching logic and structured the MySQL schema to store user and doctor data.", bullet_style))

story.append(Spacer(1, 4))

# Project 2
p2_data = [[
    Paragraph("<b>Study-Mate AI</b>", body_text),
    Paragraph("Mar 2026", right_date_style)
]]
tp2 = Table(p2_data, colWidths=[400, 140])
tp2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(tp2)
story.append(Paragraph("<i>Tech Stack: React.js, Node.js, AI/API Integration</i>", body_italic))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Developed an AI-powered study planner that helps students create and track personalized study schedules.", bullet_style))
story.append(Paragraph("&bull; Implemented AI-driven plan generation and progress tracking features to keep users on pace with their goals.", bullet_style))

story.append(Spacer(1, 4))

# Project 3
p3_data = [[
    Paragraph("<b>Ready-to-Eat</b>", body_text),
    Paragraph("Jan 2026", right_date_style)
]]
tp3 = Table(p3_data, colWidths=[400, 140])
tp3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(tp3)
story.append(Paragraph("<i>Tech Stack: React.js, Node.js, MySQL, Firebase</i>", body_italic))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Built a mobile/web ordering platform that lets users browse, order, and track ready-made food from nearby restaurants in real time.", bullet_style))
story.append(Paragraph("&bull; Implemented order tracking and deployed the application using Firebase for backend services.", bullet_style))

story.append(Spacer(1, 6))

# --- EDUCATION ---
add_section("EDUCATION")

edu1_data = [[
    Paragraph("<b>SNS College of Engineering</b>", body_text),
    Paragraph("2024 &ndash; 2028", right_date_style)
]]
tedu1 = Table(edu1_data, colWidths=[400, 140])
tedu1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(tedu1)
story.append(Paragraph("<i>B.E. &mdash; Computer Science and Design</i>", body_italic))

story.append(Spacer(1, 3))

story.append(Paragraph("<b>Vidhya Giri Hr. Sec. School</b>", body_text))
story.append(Paragraph("<i>HSC &mdash; 82% (2023&ndash;2024) &nbsp;|&nbsp; SSLC &mdash; 82% (2021&ndash;2022)</i>", body_italic))

story.append(Spacer(1, 6))

# --- TECHNICAL SKILLS ---
add_section("TECHNICAL SKILLS")
story.append(Paragraph("<b>Languages:</b> C, C++, Python", body_text))
story.append(Paragraph("<b>Frontend &amp; Backend:</b> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Node.js, REST API Handling", body_text))
story.append(Paragraph("<b>Database:</b> MySQL", body_text))
story.append(Paragraph("<b>Deployment:</b> Vercel, Firebase, Railway", body_text))
story.append(Paragraph("<b>Tools:</b> Git, GitHub, VS Code, Antigravity", body_text))

story.append(Spacer(1, 6))

# --- LINKS ---
add_section("LINKS")
story.append(Paragraph('<a href="https://linkedin.com/in/muthu007"><u>LinkedIn &mdash; linkedin.com/in/muthu007</u></a>', link_style))
story.append(Paragraph('<a href="https://github.com/muthu22222"><u>GitHub &mdash; github.com/muthu22222</u></a>', link_style))
story.append(Paragraph('<a href="https://leetcode.com/u/MUTHU77"><u>LeetCode &mdash; leetcode.com/u/MUTHU77</u></a>', link_style))
story.append(Paragraph('<a href="https://github.com/muthu22222/Muthuport"><u>Portfolio &mdash; muthukumarn portfolio</u></a>', link_style))

# Build Document
doc.build(story, canvasmaker=NumberedCanvas)

# Convert Page 1 to JPG for preview asset
doc_pdf = pymupdf.open(pdf_path)
page = doc_pdf.load_page(0)
pix = page.get_pixmap(dpi=200)
pix.save(jpg_path)
print("Successfully generated exact PDF and JPG assets.")
