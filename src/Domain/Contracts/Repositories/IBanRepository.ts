import Ban from "../../Entities/Ban";

export interface IBanRepository {

     save(Ban): Promise<Ban>
}