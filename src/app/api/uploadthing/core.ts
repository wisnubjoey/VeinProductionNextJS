import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();

// Simplified auth
const auth = () => ({ id: "admin" });
 
export const ourFileRouter = {
  mediaUploader: f({
    image: { maxFileSize: "16MB", maxFileCount: 1 },
    video: { maxFileSize: "16MB", maxFileCount: 1 }
  })
    .middleware(async () => {
      const user = auth();
      if (!user) throw new Error("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completed", { metadata, file });
    })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;