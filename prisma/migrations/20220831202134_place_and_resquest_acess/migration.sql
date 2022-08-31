-- Como não sei se a ideia está seguindo correta eu já criei essa migration pra vocÊ dar uma olhada la no schema.prisma 


-- CreateTable
CREATE TABLE "places" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "access_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "request_access" (
    "userId" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "placeId"),
    CONSTRAINT "request_access_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "request_access_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "places_name_key" ON "places"("name");
