/*
  Warnings:

  - You are about to drop the column `target` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `Course_Content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Course_Content_Group` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `duration` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Course_Content" DROP CONSTRAINT "Course_Content_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Course_Content_Group" DROP CONSTRAINT "Course_Content_Group_course_id_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "target",
ADD COLUMN     "isBestSeller" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isNewCourse" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "targets" TEXT[],
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Course_Content";

-- DropTable
DROP TABLE "Course_Content_Group";

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "video_url" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "group_id" TEXT,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson_Group" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" TEXT,
    "course_id" TEXT,

    CONSTRAINT "Lesson_Group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Lesson_Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson_Group" ADD CONSTRAINT "Lesson_Group_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
