/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp'
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0 || this.teacher.experienceTeachingC !== undefined )
                return `Available Teacher: ${this.teacher.firstName}`
            else {
                return 'No available teacher'
            }
        }

    }
}