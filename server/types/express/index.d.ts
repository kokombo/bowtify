declare global {
  namespace Express {
    interface Request {
      user: User;
      files: Express.Multer.File[];
    }
  }
}

export {};
