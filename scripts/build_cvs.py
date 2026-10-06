"""Rebuild the four CVs. Requires reportlab and pypdf; originals remain unchanged."""
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from pypdf import PdfReader
from update_cv_qr import profile_url, draw_qr

ROOT = Path(__file__).resolve().parent.parent / 'public' / 'files'
for name, file in [('CV','OpenSans-Regular.ttf'),('CVB','OpenSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(Path(__file__).parent/'cv-assets'/file)))
W,H=595.28,841.89
NAVY=HexColor('#253444')
GRAY=HexColor('#4d4d4d')

DATA = {
'fr': {
 'project_title':'Cheffe de projet IT / Product Owner',
 'tech_title':'Développeuse full-stack',
 'project_intro':"Développeuse full-stack depuis 2019, je pilote des projets web de la définition du besoin au suivi après livraison. J’aime clarifier les attentes, organiser les priorités et faire le lien entre les clients, les utilisateurs et la technique. Je souhaite mettre cette expérience au service d’une équipe projet ou produit.",
 'tech_intro':"Développeuse full-stack depuis 2019, je conçois et fais évoluer des sites, applications web et solutions e-commerce. J’interviens du front-end au back-end, de l’analyse du besoin à la mise en production, avec une attention portée à la qualité du code, aux performances et à l’expérience utilisateur.",
 'sections':['EXPÉRIENCES','FORMATIONS','COMPÉTENCES','SAVOIR-ÊTRE','LANGUES'],
 'roles':['Développeuse full-stack - Freelance','Formatrice - IT-Akademy','Mentor - OpenClassrooms','Développeuse front-end - CISS','Développeuse Symfony / Sylius - Synolia','Développeuse web - Cyloé'],
 'dates':["Février 2022 - Aujourd’hui","Janvier 2023 - Avril 2026","Octobre 2022 - Décembre 2024","Mai 2022 - Novembre 2022","Septembre 2021 - Mars 2022","Août 2019 - Septembre 2021"],
 'counts':['Plus de 34 projets réalisés','Plus de 17 sessions • Plus de 255 étudiants','Plus de 30 étudiants accompagnés','','',''],
 'project':[
 ["Recueillir et clarifier les besoins, objectifs, contraintes et priorités des clients.","Cadrer les projets : audit, choix fonctionnels et techniques, estimation des charges, chiffrage et devis.","Planifier les étapes et suivre l’avancement ; présenter les réalisations et recueillir les retours clients.","Développer des sites, plateformes et boutiques ; assurer la recette, les corrections et la mise en production.","Former les clients et assurer la maintenance et le suivi après livraison."],
 ["Concevoir et animer des formations en développement web, UX et méthodologie de projet, de Bac+2 à Bac+5.","Enseigner l’analyse du besoin, la rédaction de spécifications et l’estimation des charges.","Adapter les explications aux niveaux des apprenants et les accompagner dans la résolution de difficultés techniques."],
 ["Accompagner les étudiants WordPress et Intégrateur Web : organisation du travail et suivi des projets.","Faire des retours sur les réalisations et aider à résoudre les difficultés pour développer l’autonomie."],
 ["Analyser et traiter des tickets de maintenance et d’évolution de solutions de paiement en Vue.js et Laravel.","Suivre les tickets et les priorités en Kanban ; participer au maquettage sur Figma et aux revues de code."],
 ["Analyser les tickets, estimer les tâches et développer des correctifs et évolutions e-commerce sous Symfony / Sylius.","Suivre l’avancement dans Jira ; participer aux cérémonies Scrum et travailler selon les priorités du backlog."],
 ["Gérer plusieurs projets clients en autonomie : recueil des besoins, planification, priorisation et suivi des délais.","Développer les sites et boutiques, configurer l’hébergement et assurer la recette et la mise en production.","Former les clients, assurer la maintenance et améliorer le SEO, les performances et l’expérience utilisateur."]],
 'tech':[
 ["Concevoir et développer des sites, plateformes et solutions e-commerce, du front-end au back-end.","Analyser les besoins et l’existant ; intégrer des fonctionnalités sur mesure et des services tiers.","Assurer la maintenance corrective et évolutive : analyser les incidents, corriger les anomalies et améliorer les performances.","Technologies : PHP, JavaScript, React, Next.js, Laravel, Tailwind CSS, WordPress, WooCommerce, Shopify et MySQL.","Réaliser les tests et la recette, déployer les solutions, former les utilisateurs et assurer le support."],
 ["Concevoir et animer des formations en HTML/CSS, JavaScript, PHP, programmation orientée objet, WordPress et WooCommerce.","Accompagner la mise en pratique et la résolution de problèmes techniques, de Bac+2 à Bac+5.","Transmettre les bonnes pratiques de qualité du code, d’accessibilité, d’UX et de conception de projets."],
 ["Accompagner des étudiants en développement WordPress et intégration web : analyse des problèmes et aide à la recherche de solutions.","Faire des retours sur leurs projets et transmettre des méthodes de travail pour renforcer leur autonomie."],
 ["Développer des fonctionnalités et corriger des anomalies sur des solutions de paiement en Vue.js et Laravel.","Concevoir des interfaces sur Figma ; travailler avec Git et SVN, participer aux revues de code et suivre les tickets en Kanban."],
 ["Développer des correctifs et évolutions sur des projets e-commerce sous Symfony / Sylius, PHP et Twig.","Analyser et estimer les tickets ; travailler en Scrum avec Jira, Git et les revues de code."],
 ["Développer et intégrer des sites et boutiques avec WordPress, WooCommerce, Shopify, Joomla et PHP.","Configurer l’hébergement, déployer les sites et assurer la maintenance et la résolution des incidents.","Optimiser le SEO, les performances et l’affichage sur différents écrans ; former et assister les clients."]],
 'project_skills': [('CADRAGE & PILOTAGE','Analyse des besoins, spécifications, estimation, chiffrage, planification, priorisation, suivi d’avancement, recette, relation client.'),('MÉTHODES & OUTILS','Agile, Scrum, Kanban\nJira, Linear, Figma, Git'),('CULTURE TECHNIQUE','PHP, JavaScript, React, Vue.js, Laravel, Symfony / Sylius, WordPress, Shopify, MySQL'),('OUTILS IA','ChatGPT, Claude\nClaude Code, Cursor')],
 'tech_skills':[('FRONT-END','HTML, CSS, JavaScript\nReact, Next.js, Vue.js\nTailwind CSS, Bootstrap'),('BACK-END & DONNÉES','PHP, Laravel, Symfony, Sylius\nMySQL, API REST'),('CMS & E-COMMERCE','WordPress, WooCommerce, Shopify, WiziShop, Joomla'),('OUTILS & DÉPLOIEMENT','Git, SVN, Jira, Figma\nDNS, SSL, FTP'),('IA & AUTOMATISATION','n8n, ChatGPT, Claude\nClaude Code, Codex, Cursor')],
 'soft':'Organisation, rigueur, autonomie, communication, pédagogie, résolution de problèmes.',
 'languages':'Français : langue maternelle\nAnglais : usage professionnel',
 'education':[('Mastère 1 - Développeuse\nd’applications full-stack','IT-AKADEMY / 2019 - 2021','Titre RNCP niveau 6 • En apprentissage\nDéveloppement web, POO, bases de données, architecture logicielle et gestion de projet.'),('Développeuse web','OPENCLASSROOMS / 2018 - 2019','Titre RNCP niveau 5 (Bac+2)\nHTML/CSS, JavaScript, API, programmation orientée objet, bases de données et SEO.')],
 'scan':'CV et projets en ligne','licence':'Permis B • Véhiculée'
},
'en': {
 'project_title':'IT Project Manager / Product Owner', 'tech_title':'Full-stack Developer',
 'project_intro':"Full-stack developer since 2019, managing web projects from the first client discussion to support after launch. I enjoy making needs clear, organising priorities and connecting clients, users and technical work. I want to bring this experience to a project or product team.",
 'tech_intro':"Full-stack developer since 2019, building and improving websites, web applications and online stores. I work on both front-end and back-end, from understanding needs to deployment, with a focus on code quality, performance and user experience.",
 'sections':['EXPERIENCE','EDUCATION','SKILLS','SOFT SKILLS','LANGUAGES'],
 'roles':['Freelance Full-stack Developer','Instructor - IT-Akademy','Mentor - OpenClassrooms','Front-end Developer - CISS','Symfony / Sylius Developer - Synolia','Web Developer - Cyloé'],
 'dates':['February 2022 - Present','January 2023 - April 2026','October 2022 - December 2024','May 2022 - November 2022','September 2021 - March 2022','August 2019 - September 2021'],
 'counts':['Over 34 projects completed','Over 17 sessions • Over 255 students','Over 30 students supported','','',''],
 'project':[
 ["Gather and clarify client needs, goals, constraints and priorities.","Define project scope: review existing systems, advise on features and technical choices, estimate work and prepare quotes.","Plan project stages, organise tasks and track progress; present work to clients and adjust solutions based on their feedback.","Build websites, platforms and online stores; organise acceptance testing, fix issues and deploy solutions.","Train clients and provide maintenance and support after launch."],
 ["Designed and taught courses in web development, UX and project methods for students at different higher education levels.","Taught requirements analysis, specification writing and workload estimation.","Adapted explanations to students’ needs and helped them solve technical problems."],
 ["Supported students on WordPress development and web integration courses: work planning, project progress and next steps.","Reviewed their work and helped them solve problems and become more independent."],
 ["Analysed and handled maintenance and feature tickets for payment solutions built with Vue.js and Laravel.","Tracked tickets and priorities using Kanban; helped design interfaces in Figma and took part in code reviews."],
 ["Analysed tickets, estimated tasks and developed fixes and features for Symfony / Sylius e-commerce projects.","Tracked work in Jira, took part in Scrum meetings and followed the project backlog priorities."],
 ["Managed several client projects independently: gathered needs, planned work, set task priorities and tracked deadlines.","Built websites and online stores, configured hosting, tested solutions and deployed them.","Trained clients, maintained websites and improved SEO, performance and user experience."]],
 'tech':[
 ["Build websites, web platforms and online stores, working on both front-end and back-end.","Analyse client needs and existing systems; develop custom features and integrate third-party services.","Maintain and improve applications: investigate incidents, fix bugs and improve performance.","Technologies: PHP, JavaScript, React, Next.js, Laravel, Tailwind CSS, WordPress, WooCommerce, Shopify and MySQL.","Test and deploy solutions, train users and provide technical support."],
 ["Designed and taught courses in HTML/CSS, JavaScript, PHP, object-oriented programming, WordPress and WooCommerce.","Guided students through practical work and technical problems at different higher education levels.","Taught good practices in code quality, accessibility, UX and web project design."],
 ["Helped WordPress development and web integration students understand technical problems and find solutions.","Reviewed their projects and shared working methods to help them become more independent."],
 ["Developed features and fixed bugs in payment solutions built with Vue.js and Laravel.","Designed interfaces in Figma; used Git and SVN, took part in code reviews and tracked tickets using Kanban."],
 ["Developed fixes and features for e-commerce projects using Symfony / Sylius, PHP and Twig.","Analysed and estimated tickets; worked in Scrum with Jira, Git and code reviews."],
 ["Built websites and online stores using WordPress, WooCommerce, Shopify, Joomla and PHP.","Configured hosting, deployed websites and handled maintenance and technical incidents.","Improved SEO, performance and layouts across screen sizes; trained and supported clients."]],
 'project_skills':[('PROJECT PLANNING','Requirements analysis, specifications, estimation, pricing, planning, task priorities, progress tracking, acceptance testing, client communication.'),('METHODS & TOOLS','Agile, Scrum, Kanban\nJira, Linear, Figma, Git'),('TECHNICAL BACKGROUND','PHP, JavaScript, React, Vue.js, Laravel, Symfony / Sylius, WordPress, Shopify, MySQL'),('AI TOOLS','ChatGPT, Claude\nClaude Code, Cursor')],
 'tech_skills':[('FRONT-END','HTML, CSS, JavaScript\nReact, Next.js, Vue.js\nTailwind CSS, Bootstrap'),('BACK-END & DATA','PHP, Laravel, Symfony, Sylius\nMySQL, REST APIs'),('CMS & E-COMMERCE','WordPress, WooCommerce, Shopify, WiziShop, Joomla'),('TOOLS & DEPLOYMENT','Git, SVN, Jira, Figma\nDNS, SSL, FTP'),('AI & AUTOMATION','n8n, ChatGPT, Claude\nClaude Code, Codex, Cursor')],
 'soft':'Organisation, attention to detail, independence, communication, teaching, problem solving.',
 'languages':'French: native\nEnglish: professional working level',
 'education':[('Mastère 1 - Full-stack\nApplication Development','IT-AKADEMY / 2019 - 2021','French RNCP level 6 qualification • Apprenticeship\nWeb development, OOP, databases, software architecture and project management.'),('Web Development','OPENCLASSROOMS / 2018 - 2019','French RNCP level 5 qualification\nHTML/CSS, JavaScript, APIs, object-oriented programming, databases and SEO.')],
 'scan':'Online CV and projects','licence':'Driving licence • Own vehicle'
}}

EDUCATION_DETAILS = {
 'fr': [
  ['Développement web et POO : PHP, JavaScript, Node.js, Python, Java, API, frameworks et design patterns.', 'Bases de données : conception, administration et optimisation ; architecture, sécurité et performance.', 'Gestion de projet : besoins, spécifications, cahiers des charges, chiffrage, planification et coordination.', 'Qualité logicielle, DevOps, cloud AWS, UX design, SEO et e-commerce.'],
  ['Intégration de sites responsives en HTML5/CSS3.', 'Développement de fonctionnalités dynamiques en JavaScript et intégration d’API.', 'Programmation orientée objet, gestion des erreurs et bonnes pratiques de développement.', 'Conception et exploitation de bases de données.', 'Optimisation SEO, performances et compatibilité multi-écrans.']],
 'en': [
  ['Web development and OOP: PHP, JavaScript, Node.js, Python, Java, APIs, frameworks and design patterns.', 'Database design, management and optimisation; software architecture, security and performance.', 'Project management: gathering needs, writing specifications, estimating costs, planning and coordination.', 'Methods and tools: software quality, DevOps, AWS cloud, UX design, SEO and e-commerce.'],
  ['Responsive website development with HTML5/CSS3.', 'Dynamic JavaScript features and API integration.', 'Object-oriented programming, error handling and good development practices.', 'Database design and management.', 'SEO, performance and compatibility across screen sizes.']]
}

# Targeted copy: retain factual job titles and distinguish project delivery
# from contribution to an Agile team's backlog.
DATA['fr'].update({
 'project_intro': 'Depuis 2019, je réalise et pilote des projets web, du recueil des besoins au suivi après livraison. Mon expérience en agence et en freelance associe cadrage, chiffrage, planification et relation client. Ma culture full-stack m’aide à relier les attentes métiers, les usages et les contraintes techniques.',
 'tech_intro': 'Développeuse full-stack depuis 2019, je développe et maintiens des sites, plateformes web et solutions e-commerce. Mon parcours associe projets clients en autonomie et travail en équipe sur des solutions de paiement et des applications Symfony / Sylius. J’allie analyse des besoins, résolution de problèmes et accompagnement technique.',
 'project': [
  ['Qualifier les demandes et traduire les objectifs, usages et contraintes clients en solutions fonctionnelles et techniques.',
   'Cadrer les projets : audit de l’existant, conseil, estimation des charges, chiffrage et propositions commerciales.',
   'Planifier les étapes, organiser les priorités et animer les échanges de suivi : avancement, retours clients et ajustements.',
   'Réaliser les sites, plateformes et boutiques ; assurer la recette, les corrections et la mise en production.',
   'Accompagner l’adoption des outils : formation des clients, maintenance et suivi des demandes d’évolution.'],
  ['Enseigner le recueil des besoins, les spécifications et le chiffrage, de Bac+2 à Bac+5.',
   'Concevoir et animer des formations en développement web et UX, avec des mises en pratique adaptées aux niveaux.',
   'Vulgariser les concepts techniques, guider la résolution de difficultés et transmettre les bonnes pratiques de qualité.'],
  ['Suivre les projets d’étudiants WordPress et Intégrateur Web : organisation, prochaines étapes et objectifs pédagogiques.',
   'Adapter l’accompagnement et les retours aux difficultés rencontrées pour développer les compétences et l’autonomie.'],
  ['Analyser et traiter les tickets de maintenance de solutions de paiement en Vue.js / Laravel ; suivre leur statut en Kanban.',
   'Contribuer à la conception d’interfaces sur Figma et aux revues de code au sein de l’équipe.'],
  ['Analyser les besoins des tickets e-commerce, estimer les tâches et suivre leur avancement dans Jira.',
   'Développer sous Symfony / Sylius selon les priorités du backlog ; participer aux planifications de sprint et rétrospectives.'],
  ['Piloter plusieurs projets clients : besoins, planification, priorisation et suivi des délais, en autonomie.',
   'Réaliser les sites et boutiques, gérer l’hébergement, assurer la recette et la mise en production.',
   'Former les clients, suivre les évolutions et la maintenance ; améliorer le SEO, les performances et l’expérience utilisateur.']
 ],
 'tech': [
  ['Développer des sites, plateformes et boutiques sur mesure : front-end, back-end et intégration de services tiers.',
   'Auditer l’existant et traduire les besoins clients en solutions adaptées aux usages et contraintes.',
   'Assurer la maintenance : analyser les incidents, corriger les anomalies et optimiser les performances et l’UX.',
   'Environnement : PHP, JavaScript, React, Next.js, Laravel, Tailwind CSS, WordPress, WooCommerce, Shopify et MySQL.',
   'Réaliser la recette et la mise en production ; former les clients et assurer l’assistance technique.'],
  ['Enseigner HTML/CSS, JavaScript, PHP procédural et orienté objet, WordPress et WooCommerce, de Bac+2 à Bac+5.',
   'Concevoir les exercices et aider à résoudre les difficultés techniques en adaptant la pédagogie.',
   'Transmettre les bonnes pratiques de qualité du code, d’accessibilité et d’UX, ainsi que la rédaction de spécifications.'],
  ['Accompagner les projets des parcours Développeur WordPress et Intégrateur Web : analyse des difficultés et recherche de solutions.',
   'Faire des retours sur les travaux et transmettre des bonnes pratiques de développement, de qualité et d’organisation.'],
  ['Développer des fonctionnalités et correctifs en Vue.js et Laravel pour la maintenance de solutions de paiement.',
   'Analyser et suivre les tickets en Kanban ; concevoir des interfaces sur Figma et collaborer avec Git, SVN et les revues de code.'],
  ['Maintenir et faire évoluer plusieurs projets e-commerce sous Symfony / Sylius, PHP et Twig, selon les spécifications.',
   'Analyser et estimer les tickets ; collaborer en Scrum avec Jira, Git et les revues de code.'],
  ['Développer des sites et boutiques avec WordPress, WooCommerce, Shopify, WiziShop, Joomla et PHP.',
   'Gérer l’hébergement, le paramétrage et le déploiement ; assurer la recette, les corrections et les évolutions.',
   'Optimiser le SEO, les performances et l’affichage multi-écrans ; former les clients et résoudre les incidents techniques.']
 ]
})
DATA['en'].update({
 'project_intro': 'Since 2019, I have built and managed web projects from gathering needs to support after launch. My agency and freelance experience covers project scope, cost estimates, planning and client communication. My full-stack background helps me connect business needs, user needs and technical constraints.',
 'tech_intro': 'Full-stack developer since 2019, building and maintaining websites, web platforms and online stores. I have worked independently on client projects and in teams on payment solutions and Symfony / Sylius applications. I bring experience in requirements analysis, problem solving and technical support.',
 'project': [
  ['Clarify client requests and turn goals, user needs and constraints into functional and technical solutions.',
   'Define project scope: review existing systems, advise clients, estimate work and costs, and prepare proposals.',
   'Plan stages, organise priorities and hold progress meetings to present work, gather feedback and adjust solutions.',
   'Build websites, platforms and online stores; carry out acceptance testing, fix issues and deploy solutions.',
   'Help clients use their tools through training, maintenance and follow-up on requests for changes.'],
  ['Taught requirements analysis, specification writing and cost estimation to higher education students.',
   'Designed and taught web development and UX courses, with practical work suited to different skill levels.',
   'Explained technical concepts, helped students solve problems and shared good quality practices.'],
  ['Tracked WordPress development and web integration student projects: work planning, next steps and learning goals.',
   'Adapted support and feedback to each student’s difficulties to help them build skills and work independently.'],
  ['Analysed and handled maintenance tickets for Vue.js / Laravel payment solutions; tracked ticket status using Kanban.',
   'Helped design interfaces in Figma and took part in code reviews within the team.'],
  ['Analysed e-commerce ticket requirements, estimated tasks and tracked progress in Jira.',
   'Developed with Symfony / Sylius following backlog priorities; took part in sprint planning and retrospectives.'],
  ['Managed several client projects independently: requirements, work planning, priorities and deadlines.',
   'Built websites and online stores, managed hosting, carried out acceptance testing and deployed solutions.',
   'Trained clients, handled changes and maintenance, and improved SEO, performance and user experience.']
 ],
 'tech': [
  ['Build custom websites, platforms and online stores: front-end, back-end and third-party service integration.',
   'Analyse client needs and review existing systems to propose solutions suited to their users and constraints.',
   'Maintain applications: investigate incidents, fix bugs and improve performance and user experience.',
   'Tools and technologies: PHP, JavaScript, React, Next.js, Laravel, Tailwind CSS, WordPress, WooCommerce, Shopify and MySQL.',
   'Carry out acceptance testing and deployment; train clients and provide technical support.'],
  ['Taught HTML/CSS, JavaScript, procedural and object-oriented PHP, WordPress and WooCommerce to higher education students.',
   'Designed practical exercises and helped students solve technical problems, adapting teaching to their skill levels.',
   'Shared good practices in code quality, accessibility and UX, along with specification writing.'],
  ['Helped WordPress development and web integration students analyse project difficulties and find solutions.',
   'Reviewed their work and shared good practices in development, quality and work planning.'],
  ['Developed features and fixes in Vue.js and Laravel as part of payment solution maintenance.',
   'Analysed and tracked tickets using Kanban; designed interfaces in Figma and worked with Git, SVN and code reviews.'],
  ['Maintained and improved several e-commerce projects using Symfony / Sylius, PHP and Twig, following specifications.',
   'Analysed and estimated tickets; worked in Scrum with Jira, Git and code reviews.'],
  ['Built websites and online stores with WordPress, WooCommerce, Shopify, WiziShop, Joomla and PHP.',
   'Managed hosting, configuration and deployment; carried out acceptance testing, fixes and feature updates.',
   'Improved SEO, performance and layouts across screen sizes; trained clients and solved technical incidents.']
 ]
})

def education_for(lang,mode):
    """Change emphasis and reading order without dropping course subjects."""
    first,second=EDUCATION_DETAILS[lang]
    if mode=='project':
        return [[first[2],first[3],first[0],first[1]],
                [second[0],second[4],second[1],second[2],second[3]]]
    return [[first[0],first[1],first[3],first[2]],second]

def build(lang,mode):
    from reportlab.lib.utils import ImageReader
    from PIL import Image
    d=DATA[lang]; path=ROOT/f'CV-Manon-Gomez-Mor-{mode.upper()}-{lang.upper()}.pdf'
    c=canvas.Canvas(str(path),pagesize=(W,H)); c.setTitle('Manon Gomez Mor - '+d[mode+'_title']); c.setAuthor('Manon Gomez Mor')
    def para(text,x,y,width,size=8,bold=False,color=GRAY,leading=None):
        p=Paragraph(escape(text).replace('\n','<br/>'),ParagraphStyle('p',fontName='CVB' if bold else 'CV',fontSize=size,leading=leading or size*1.25,textColor=color))
        _,h=p.wrap(width,H);p.drawOn(c,x,H-y-h);return y+h
    def spaced(text,x,y,size,color):
        c.saveState();c.setFillColor(color);t=c.beginText(x,H-y-size);t.setFont('CVB',size);t.setCharSpace(3.2);t.textOut(text);c.drawText(t);c.restoreState()
    def section(text,x,y,width,color=NAVY,line=False):
        spaced(text,x,y,11.5,color)
        if line:
            tw=pdfmetrics.stringWidth(text,'CVB',11.5)+3.2*len(text)
            c.setStrokeColor(HexColor('#d5d5d5'));c.setLineWidth(.6);c.line(x+tw+15,H-y-8,x+width,H-y-8)
        return y+25
    muted=HexColor('#dce2e9')
    def sidebar_section(text,y):
        c.saveState()
        c.setStrokeColor(HexColor('#536170'));c.setLineWidth(.45)
        c.line(16,H-y+9,155,H-y+9)
        t=c.beginText(16,H-y-10);t.setFont('CVB',10);t.setCharSpace(1.8)
        t.setFillColor(white);t.textOut(text);c.drawText(t)
        c.restoreState()
        return y+23
    original=ROOT/'CurriculumVitaeManonGomezMor-2.pdf'
    images=list(PdfReader(original).pages[0].images)
    c.setFillColor(NAVY);c.rect(0,0,168,H,fill=1,stroke=0)
    clip=c.beginPath();clip.circle(182.5,H-67.5,56.5)
    c.saveState();c.clipPath(clip,stroke=0);c.drawImage(ImageReader(images[0].image),126,H-124,113,113,mask='auto');c.restoreState()
    # Original logo images; Synolia's original vector mark is kept as a sharp crop.
    import subprocess, tempfile
    with tempfile.TemporaryDirectory(prefix='cv-assets-') as temp:
        target=str(Path(temp)/'original')
        subprocess.run(['pdftoppm','-r','216','-singlefile','-png',str(original),target],check=True)
        hi=Image.open(target+'.png').copy()
    synolia=hi.crop((180*3,502*3,196*3,518*3))
    logos=[images[5].image,images[6].image,images[4].image,images[3].image,synolia,images[2].image]
    y=19
    intro=d[mode+'_intro']
    # Narrow top text keeps the portrait clear, as in the initial technical CV.
    # The original intro widens below the portrait, rather than staying narrow.
    words=intro.split();line='';y=20
    while words:
        width=109 if y<111 else 139
        while words and pdfmetrics.stringWidth((line+' '+words[0]).strip(),'CV',8)<=width:
            line=(line+' '+words.pop(0)).strip()
        para(line,16,y,width,8,color=white,leading=10.67);line='';y+=10.67
    assert y<188,('intro overflow',lang,mode,y)
    contact_top=max(140,y+18)
    icon_boxes=[(15,197,27,208),(15,216,27,226),(15,233,27,245),(15,253,27,264),(15,271,27,281)]
    for index,t in enumerate(['07 82 95 66 21','manongomezdev@gmail.com','Aix-les-Bains','@manon-gomez-mor',d['licence']]):
        y=contact_top+index*18
        box=icon_boxes[index];icon=hi.crop(tuple(int(v*3) for v in box))
        c.drawImage(ImageReader(icon),16,H-y-10.5,10,10)
        para(t,31,y,130,8,color=muted)
        if t.startswith('@'):
            c.linkURL('https://www.linkedin.com/in/manon-gomez-mor-251b0b170/',(31,H-y-11,159,H-y),relative=0)
        if '@gmail' in t:
            c.linkURL('mailto:manongomezdev@gmail.com',(31,H-y-11,159,H-y),relative=0)
    y=sidebar_section('COMPÉTENCES' if lang=='fr' else 'SKILLS',y+32)
    for title,body in d[mode+'_skills']:
        y=para(title,16,y,140,7.5,True,white)+3
        y=para(body,16,y,140,7.8,color=muted,leading=10.3)+10
    y=sidebar_section('QUALITÉS' if lang=='fr' else 'SOFT SKILLS',y+12)
    y=para(d['soft'],16,y,140,8,color=muted)+22
    y=sidebar_section(d['sections'][4],y)
    y=para(d['languages'],16,y,140,8,color=muted)+22
    y=sidebar_section('PORTFOLIO',y)
    url = profile_url(mode, lang)
    draw_qr(c, url, 15, H-y-62)
    para('Pour accéder à mon CV en ligne' if lang=='fr' else 'To view my online CV',81,y+13,74,7.7,color=muted)
    para('manongomezmor.fr',81,y+38,74,6.8,True,white)
    c.linkURL(url,(15,H-y-62,155,H-y),relative=0)
    assert y+62<826,('sidebar overflow',lang,mode,y+62)
    spaced('MANON GOMEZ MOR',258,24,21,NAVY)
    para(d[mode+'_title'],258,56,318,17 if mode=='project' else 20,True,GRAY,25)
    y=section(d['sections'][0],235,105,342,line=True)
    content_height=6*(15+7.5*1.25+4)
    for bullets in d[mode]:
        for bullet in bullets:
            p=Paragraph(escape(bullet),ParagraphStyle('measure',fontName='CV',fontSize=8,leading=10.1))
            content_height+=p.wrap(382,H)[1]+.6
    block_gap=max(5,(614-y-content_height)/6)
    def badge(text,x,y):
        bw=pdfmetrics.stringWidth(text,'CV',7.1)+8
        c.setFillColor(HexColor('#eeeeef'));c.roundRect(x,H-y-14,bw,14,3,fill=1,stroke=0)
        para(text,x+4,y+2,bw-8,7.1)
        return x+bw+5
    for i,bullets in enumerate(d[mode]):
        c.drawImage(ImageReader(logos[i]),180,H-y-13,13,13,mask='auto')
        title=d['roles'][i]
        size=10
        endx=197+pdfmetrics.stringWidth(title,'CVB',size)+5
        if i==0: labels=['+ de 34 projets réalisés'] if lang=='fr' else ['34+ projects completed']
        elif i==1: labels=['17+ sessions animées','255+ étudiants accompagnés'] if lang=='fr' else ['17+ sessions taught','255+ students supported']
        elif i==2: labels=['30+ étudiants accompagnés'] if lang=='fr' else ['30+ students supported']
        else: labels=[]
        total=sum(pdfmetrics.stringWidth(t,'CV',7.1)+13 for t in labels)
        if endx+total>579:
            size=9.4;endx=197+pdfmetrics.stringWidth(title,'CVB',size)+5
        assert endx+total<583,('badge overflow',lang,i,endx+total)
        para(title,197,y,380,size,True)
        for label in labels:endx=badge(label,endx,y-1)
        y+=15
        y=para(d['dates'][i],197,y,380,7.5)+4
        for bullet in bullets:
            para('•',184,y,8,7.7)
            y=para(bullet,195,y,382,8,leading=10.1)+.6
        y+=block_gap
    y=section(d['sections'][1],197,max(y+1,622),380,line=True)
    for i,(title,date,body) in enumerate(d['education']):
        c.drawImage(ImageReader(logos[1 if i==0 else 2]),180,H-y-13,13,13,mask='auto')
        y=para(title.replace('\n',' '),197,y,380,9.6,True)+3
        qualification=(['RNCP niveau 6 • En apprentissage','RNCP niveau 5 (Bac+2)'] if lang=='fr' else ['French RNCP level 6 • Apprenticeship','French RNCP level 5 qualification'])[i]
        y=para(date+' • '+qualification,197,y,380,7.4)+5
        for detail in education_for(lang,mode)[i]:
            para('•',184,y,8,7.6)
            y=para(detail,195,y,382,7.6,leading=9.5)+.6
        y+=9 if i==0 else 0
        assert y<830,('education overflow',lang,mode,y)
    c.showPage();c.save();print(path.name, 'OK',round(y,1))

if __name__=='__main__':
    for language in DATA:
        for variant in ['project','tech']:build(language,variant)
