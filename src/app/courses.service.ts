import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: {}[] = [
      {
        id: 1,
        title: '3D Animation',
        src: '..//../assets/Images/course-1.jpg',
        para: '3D animation institutes in Delhi provides most advanced animation course to our students.',
        fee: '200K',
        training : 'Classroom',
        duration: '24 Months',
        detail:
          'This 3d animation course is designed to make students expert in the advanced skills of various animation requirements. Our teachers will focus on practical as well as theoretical development of the students.',
      },
      {
        id: 2,
        title: 'Visual Effects',
        src: '..//../assets/Images/course-2.jpg',
        para: ' Visual Effects Master Course students of our institute build up visual and tangible exploration skills...',
        fee: '95K',
        training : 'Classroom',
        duration: '12 Months',
        detail:
          'The key study elements of visual effects training like drawing, exploring, perspective, storytelling, story-boarding, camera, and lighting techniques, will boost your creativity and  bring out the artistic personality of you',
      },
      {
        id: 3,
        title: '2D Animation',
        src: '..//../assets/Images/course-3.jpg',
        para: 'This advanced 2d animation course will give you an in-depth understanding of the techniques',
        fee: '130K',
        training : 'Classroom',
        duration: '18 Months',
        detail:
          'The key study elements of visual effects training like drawing, exploring, perspective, storytelling, story-boarding, camera, and lighting techniques, will boost your creativity and  bring out the artistic personality of you',
      },
      {
        id: 4,
        title: 'Multimedia',
        src: '..//../assets/Images/course-4.jpg',
        para: 'Multimedia Standard course is very popular job oriented multimedia course in Rohini designed...',
        fee: '150K',
        training : 'Classroom',
        duration: '18 Months',
        detail:
          'Multimedia industries are booming and companies are heavily investing on versatile employees. Our Multimedia Standard course is very popular job oriented multimedia course in Rohini designed specially to master students in different fields.',
      },
      {
        id: 5,
        title: 'Multimedia Master Plus',
        src: '..//../assets/Images/course-5.jpg',
        para: 'most advanced diploma in multimedia is an ace program that is spread over 6 semesters versatile employees.',
        fee: '300K',
        training : 'Classroom',
        duration: '36 Months',
        detail:
          'Multimedia industries are booming and companies are heavily investing on versatile employees. Our Multimedia Standard course is very popular job oriented multimedia course in Rohini designed specially to master students in different fields.',
      },
      {
        id: 6,
        title: 'Multimedia Master',
        src: '..//../assets/Images/course-6.jpg',
        para: 'Multimedia Design resides in every other industry. Opening up a lot of career avenues for people',
        fee: '235K',
        training : 'Classroom',
        duration: '24 Months',
        detail:
          'Multimedia Design resides in every other industry. Opening up a lot of career avenues for people, it has become a favorite career option for people. By pursuing this multimedia course in Delhi, students will gain knowledge of screen based communication and workflow in various design industries like print, web, mobile, TV, and marketing along with a sound understanding of camera handling, colors, lights, composition, exposure, product shoot, still photography etc.',
      },
    
  ];

  getCourses() {
    return this.courses;
  }
  getCourse(id: number) {
    return this.courses[id - 1];
  }
}
