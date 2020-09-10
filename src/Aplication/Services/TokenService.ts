import * as jwt from "jsonwebtoken";
import {injectable} from "inversify";

@injectable()
class TokenService {

    private readonly jwtSecret: string;

    constructor() {

        this.jwtSecret = process.env.JWT_SECRET;
    }

    public generate(payload: object, timeExpire: string | number): string {

        return jwt.sign(payload, this.jwtSecret, {expiresIn: timeExpire});
    }

}

export default TokenService;