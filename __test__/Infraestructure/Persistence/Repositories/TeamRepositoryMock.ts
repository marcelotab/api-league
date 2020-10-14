/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { injectable } from 'inversify';
import { ITeamRepository } from '../../../../src/Domain/Contracts/Repositories/ITeamRepository';
import Team from '../../../../src/Domain/Entities/Team';
import teamsMock from '../../../mocks/teamsMock';

@injectable()
export default class TeamRepositoryMock implements ITeamRepository {
    private mockSave = jest.fn();
    private mockFindAll = jest.fn();
    private mockFind = jest.fn().mockReturnValue(teamsMock);

    async save(team: Team): Promise<Team> {
        return this.mockSave(team);
    }

    findAll(): Promise<Team[]> {
        return this.mockFindAll();
    }

    find(option: any): Promise<Team[]> {
        return this.mockFind(option);
    }

    findById(id: number): Promise<Team> {
        console.log(id);
        throw new Error('Method not implemented.');
    }
    delete(team: Team): Promise<boolean> {
        console.log(team);
        throw new Error('Method not implemented.');
    }

    assertSaveCalledOnce(): void {
        expect(this.mockSave).toHaveBeenCalled();
    }

    assertIndexCalledOnce(): void {
        expect(this.mockFind).toHaveBeenCalled();
    }
}
