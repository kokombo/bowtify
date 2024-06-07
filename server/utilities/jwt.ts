import jwt from "jsonwebtoken";

const jwtSign = (
  payload: string | object | Buffer,
  secret: jwt.Secret,
  options: jwt.SignOptions
): Promise<string | undefined> =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });

const jwtVerify = (
  token: string,
  secret: jwt.Secret,
  options: jwt.VerifyOptions & {
    complete: true;
  }
): Promise<jwt.Jwt | undefined> =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, options, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });

export { jwtSign, jwtVerify };
