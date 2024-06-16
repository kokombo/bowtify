-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "subscribe_to_email" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Individual_User" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Individual_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business_User" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "bio" TEXT,

    CONSTRAINT "Business_User_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "number_of_purchases" INTEGER DEFAULT 0,
    "outline" TEXT[],
    "certification_available" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'English',
    "targets" TEXT[],
    "duration" INTEGER NOT NULL,
    "actual_price" INTEGER NOT NULL,
    "price_after_discount" INTEGER,
    "isBestSeller" BOOLEAN NOT NULL DEFAULT false,
    "isNewCourse" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course_Sold" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "sold_by" TEXT,

    CONSTRAINT "Course_Sold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseToIndividual_User" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Individual_User_user_id_key" ON "Individual_User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Business_User_user_id_key" ON "Business_User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_author_id_key" ON "Course"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToIndividual_User_AB_unique" ON "_CourseToIndividual_User"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToIndividual_User_B_index" ON "_CourseToIndividual_User"("B");

-- AddForeignKey
ALTER TABLE "Individual_User" ADD CONSTRAINT "Individual_User_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business_User" ADD CONSTRAINT "Business_User_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Lesson_Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson_Group" ADD CONSTRAINT "Lesson_Group_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Business_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Sold" ADD CONSTRAINT "Course_Sold_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Sold" ADD CONSTRAINT "Course_Sold_sold_by_fkey" FOREIGN KEY ("sold_by") REFERENCES "Business_User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToIndividual_User" ADD CONSTRAINT "_CourseToIndividual_User_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToIndividual_User" ADD CONSTRAINT "_CourseToIndividual_User_B_fkey" FOREIGN KEY ("B") REFERENCES "Individual_User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
