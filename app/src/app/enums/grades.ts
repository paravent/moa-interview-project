/**
 * Color categories for numeric grades.
 *
 * Green: grade > 80%
 * Orange: grade between 50% and 80% (inclusive lower bound)
 * Red: grade < 50%
 */
export enum Grades {
    Green = 'green',
    Yellow = 'yellow',
    Red = 'red',
}

/**
 *c percentage (0-100) to a `Grades` color.
 */
export function gradeToColor(percentage: number): Grades {
    if (percentage > 80) return Grades.Green;
    if (percentage >= 50) return Grades.Yellow;
    return Grades.Red;
}