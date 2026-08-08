import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)
        print(f"Generated PDF with EXACT total page count: {num_pages}")

pdf_path = "src/assets/resume.pdf"
jpg_path = "src/assets/resume.jpg"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=30,
    rightMargin=30,
    topMargin=25,
    bottomMargin=25
)

styles = getSampleStyleSheet()

# Custom Palette
PRIMARY = colors.HexColor("#1e1b4b")      # Deep Indigo / Navy
ACCENT = colors.HexColor("#4f46e5")       # Royal Indigo
TEXT_DARK = colors.HexColor("#0f172a")    # Slate 900
TEXT_MUTED = colors.HexColor("#475569")   # Slate 600
LINE_COLOR = colors.HexColor("#cbd5e1")   # Slate 300

# Styles
name_style = ParagraphStyle(
    "NameStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=20,
    leading=22,
    textColor=PRIMARY,
    alignment=1 # Center
)

title_style = ParagraphStyle(
    "TitleStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=12,
    textColor=ACCENT,
    alignment=1
)

contact_style = ParagraphStyle(
    "ContactStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=TEXT_MUTED,
    alignment=1
)

section_heading_style = ParagraphStyle(
    "SectionHeading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=12,
    textColor=PRIMARY,
    spaceAfter=2
)

body_bold = ParagraphStyle(
    "BodyBold",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK
)

body_regular = ParagraphStyle(
    "BodyRegular",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK
)

body_muted = ParagraphStyle(
    "BodyMuted",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8,
    leading=10,
    textColor=TEXT_MUTED
)

bullet_style = ParagraphStyle(
    "BulletStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK,
    leftIndent=10,
    firstLineIndent=-6
)

story = []

# --- HEADER ---
story.append(Paragraph("MUTHUKUMARAN S", name_style))
story.append(Spacer(1, 2))
story.append(Paragraph("FULL-STACK WEB DEVELOPER &amp; UI/UX DESIGNER", title_style))
story.append(Spacer(1, 4))
contact_line = "Coimbatore, TN, India  &bull;  +91 7402200654  &bull;  sureshmuthu1212@gmail.com"
links_line = "<b>GitHub:</b> github.com/muthu22222  &bull;  <b>LinkedIn:</b> linkedin.com/in/muthu-mk"
story.append(Paragraph(contact_line, contact_style))
story.append(Paragraph(links_line, contact_style))
story.append(Spacer(1, 6))

def add_section_header(title_text):
    story.append(Paragraph(f"<b>{title_text.upper()}</b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceBefore=1, spaceAfter=5))

# --- SUMMARY ---
add_section_header("Professional Summary")
summary_text = (
    "Motivated Full-Stack &amp; Python Developer and Computer Science student with hands-on experience building "
    "responsive web applications with React.js, Node.js, MySQL, and Python backend automation. Skilled in translating "
    "design concepts into functional, user-centric interfaces. Passionate about software development, performance optimization, and problem-solving."
)
story.append(Paragraph(summary_text, body_regular))
story.append(Spacer(1, 6))

# --- EDUCATION ---
add_section_header("Education")
edu_data = [
    [
        Paragraph("<b>B.E. Computer Science and Design</b> &bull; <i>SNS College of Engineering, Coimbatore</i>", body_regular),
        Paragraph("<font color='#475569'><b>Coimbatore, India</b></font>", ParagraphStyle("Right", parent=body_regular, alignment=2))
    ]
]
t_edu = Table(edu_data, colWidths=[420, 132])
t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t_edu)
story.append(Spacer(1, 6))

# --- SKILLS ---
add_section_header("Technical Skills")
skills_data = [
    [Paragraph("<b>Languages:</b>", body_bold), Paragraph("Python, JavaScript (ES6+), C/C++, HTML5, CSS3, SQL", body_regular)],
    [Paragraph("<b>Frameworks &amp; Libs:</b>", body_bold), Paragraph("React.js, Node.js, Express.js, Tailwind CSS, REST APIs, Framer Motion", body_regular)],
    [Paragraph("<b>Tools &amp; Databases:</b>", body_bold), Paragraph("MySQL, Firebase, Git, GitHub, Vercel, Railway, Postman", body_regular)],
]
t_skills = Table(skills_data, colWidths=[110, 442])
t_skills.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1)
]))
story.append(t_skills)
story.append(Spacer(1, 6))

# --- EXPERIENCE ---
add_section_header("Work Experience")

exp1_header = [
    [
        Paragraph("<b>Python Developer Intern</b> &bull; <i>Alfido Tech</i>", body_bold),
        Paragraph("Aug 2025 &ndash; Sep 2025 | Remote", ParagraphStyle("RightMuted", parent=body_muted, alignment=2))
    ]
]
t_exp1 = Table(exp1_header, colWidths=[400, 152])
t_exp1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t_exp1)
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Developed and tested Python scripts to automate data processing and backend execution logic.", bullet_style))
story.append(Paragraph("&bull; Collaborated with dev team using Git version control, refactoring code to improve maintainability.", bullet_style))

story.append(Spacer(1, 4))

exp2_header = [
    [
        Paragraph("<b>Web Developer Intern</b> &bull; <i>InternPe</i>", body_bold),
        Paragraph("Nov 2025 &ndash; Dec 2025 | Remote", ParagraphStyle("RightMuted", parent=body_muted, alignment=2))
    ]
]
t_exp2 = Table(exp2_header, colWidths=[400, 152])
t_exp2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t_exp2)
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Built interactive, responsive front-end components using HTML5, CSS3, and JavaScript.", bullet_style))
story.append(Paragraph("&bull; Integrated REST APIs into React.js applications to create modular and reusable user interface elements.", bullet_style))

story.append(Spacer(1, 6))

# --- PROJECTS ---
add_section_header("Key Projects")

# Project 1
proj1_header = [
    [
        Paragraph("<b>Study-Mate AI</b> &ndash; <i>AI-Powered Study Planner</i>", body_bold),
        Paragraph("<font color='#4f46e5'>React.js, Node.js, AI/API Integration</font>", ParagraphStyle("RightAccent", parent=body_muted, alignment=2))
    ]
]
t_proj1 = Table(proj1_header, colWidths=[350, 202])
t_proj1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t_proj1)
story.append(Paragraph("&bull; Built an AI-driven planner that generates personalized study schedules, progress tracking dashboards, and analytics.", bullet_style))

story.append(Spacer(1, 4))

# Project 2
proj2_header = [
    [
        Paragraph("<b>Health Nav</b> &ndash; <i>Healthcare Doctor Recommendation System</i>", body_bold),
        Paragraph("<font color='#4f46e5'>React.js, Node.js, MySQL, REST APIs</font>", ParagraphStyle("RightAccent", parent=body_muted, alignment=2))
    ]
]
t_proj2 = Table(proj2_header, colWidths=[350, 202])
t_proj2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t_proj2)
story.append(Paragraph("&bull; Developed a specialist matching platform recommending medical specialists based on user symptoms, age, and duration.", bullet_style))

story.append(Spacer(1, 4))

# Project 3
proj3_header = [
    [
        Paragraph("<b>Ready-to-Eat</b> &ndash; <i>Real-time Food Ordering Platform</i>", body_bold),
        Paragraph("<font color='#4f46e5'>React.js, Node.js, Firebase, MySQL</font>", ParagraphStyle("RightAccent", parent=body_muted, alignment=2))
    ]
]
t_proj3 = Table(proj3_header, colWidths=[350, 202])
t_proj3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(t_proj3)
story.append(Paragraph("&bull; Designed a web application for browsing menu items, placing orders, and tracking status with real-time Firebase services.", bullet_style))

doc.build(story, canvasmaker=NumberedCanvas)

