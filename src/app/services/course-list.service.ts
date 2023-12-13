import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  contentList = [
    {
      category: 'Mathe nach Themen',
      isVisible: true,
      categoryLogo: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
      courses: [
        { title: 'Einstieg in die Mathematik', link: '/math/early-math' },
        { title: 'Arithmetik', link: '/math/arithmetic' },
        { title: 'Algebra - Vorkenntnisse', link: '/math/pre-algebra' },
        { title: 'Algebra - Grundlagen', link: '/math/algebra-basics' },
        { title: 'Algebra 1', link: '/math/algebra' },
        { title: 'Algebra 2', link: '/math/algebra2' },
        { title: 'Geometrie - Grundlagen', link: '/math/basic-geo' },
        { title: 'Geometrie - Weiterführende Kenntnisse', link: '/math/geometry' },
        { title: 'Trigonometrie', link: '/math/trigonometry' },
        { title: 'Statistik - Weiterführende Kenntnisse', link: '/math/probability' },
        { title: 'Analysis - Vorkenntnisse', link: '/math/precalculus' },
        { title: 'Statistik und Wahrscheinlichkeitsrechnung', link: '/math/statistics-probability' },
        { title: 'Geometrie (alle Inhalte)', link: '/math/geometry-home' }
      ]
    },
    {
      category: 'Mathe nach Klassen',
      isVisible: true,
      categoryLogo: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
      courses: [
        { title: 'Vorschule', link: '/math/cc-kindergarten-math' },
        { title: '1. Klasse', link: '/math/cc-1st-grade-math' },
        { title: '2. Klasse', link: '/math/cc-2nd-grade-math' },
        { title: '3. Klasse', link: '/math/cc-third-grade-math' },
        { title: '4. Klasse', link: '/math/cc-fourth-grade-math' },
        { title: '5. Klasse', link: '/math/cc-fifth-grade-math' },
        { title: '6. Klasse', link: '/math/cc-sixth-grade-math' },
        { title: '7. Klasse', link: '/math/cc-seventh-grade-math' },
        { title: '8. Klasse', link: '/math/cc-eighth-grade-math' }
      ]
    },
    {
      category: 'Naturwissenschaften',
      isVisible: true,
      categoryLogo: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/science_green.png-4ca7bf-128c.png',
      courses: [
        { title: 'Biologie', link: '/science/biology' }
      ]
    },
    {
      category: 'Wirtschaft und Finanzen',
      isVisible: true,
      categoryLogo: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/economics_finance.png-55daed-128c.png',
      courses: [
        { title: 'Finanzen und Kapitalmärkte', link: '/economics-finance-domain/core-finance' }
      ]
    },
    {
      category: 'Informatik',
      isVisible: true,
      categoryLogo: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/computing_orange.png-653676-128c.png',
      courses: [
        { title: 'Programmierung', link: '/computing/computer-programming' },
        { title: 'Informationstechnik', link: '/computing/computer-science' },
        { title: 'Hour of Code', link: '/computing/hour-of-code' }
      ]
    },
    {
      category: 'Life Skills',
      isVisible: true,
      categoryLogo: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/life_skills.png-1a4785-128c.png',
      courses: [
        { title: 'Growth Mindset', link: '/college-careers-more/growth-mindset' }
      ]
    },
    {
      category: 'Unterstützungsmaterial',
      isVisible: true,
      categoryLogo: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/life_skills.png-1a4785-128c.png',
      courses: [
        { title: 'Lehrer/innen', link: '/khan-for-educators/teacher-essentials' },
        { title: 'Schüler/in', link: '/khan-for-educators/students' },
        { title: 'Eltern und Mentoren', link: '/khan-for-educators/parents-mentors-1' }
      ]
    }
  ];  

  constructor() { }

  getContentList() {
    return this.contentList.slice();
  }

  getLeftContentList() {
    return this.contentList.slice(0, (this.contentList.length / 2) + 1);
  }

  getRightContentList() {
    return this.contentList.slice((this.contentList.length / 2) + 1);
  }
}
