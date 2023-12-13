import { Component, OnInit } from '@angular/core';
import { CourseListService } from 'src/app/services/course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  leftCourseList: { category: string; isVisible: boolean; categoryLogo: string; courses: { title: string; link: string; }[]; }[] = [];
  rightCourseList: { category: string; isVisible: boolean; categoryLogo: string; courses: { title: string; link: string; }[]; }[] = [];
  
  constructor(private courseListService: CourseListService) {}

  ngOnInit(): void {
    this.leftCourseList = this.courseListService.getLeftContentList();
    this.rightCourseList = this.courseListService.getRightContentList();  }

}
