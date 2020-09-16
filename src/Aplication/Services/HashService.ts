import {IHashService} from "./IHashService";
import bcrypt from 'bcrypt';
import {injectable} from "inversify";

@injectable()
class HashService implements IHashService {

    public async hash(data: string): Promise<string> {

        return await bcrypt.hash(data, 10);
    }

    public async compare(data: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(data, hash);
    }
}

export default HashService;