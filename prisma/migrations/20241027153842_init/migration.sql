-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serial" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "price" BIGINT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL DEFAULT 'dummy-image.png',
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_serial_key" ON "Product"("serial");
