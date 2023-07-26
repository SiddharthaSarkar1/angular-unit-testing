import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { USERS } from '../mock-data/users';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Should get all users", () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(5);
      const secondUser = users.find((user: any) => user.user_id === 2);
      expect(secondUser.uname).toBe('kakon');
    });
    const mockReq = testingController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS));
  });

  it("Should get specific users by id", () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.uname).toBe('mota');
    });
    const mockReq = testingController.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[1]);
  });

  it("Should update the user by id", () => {
    let changes = { email: "mota69@gmail.com" };
    service.updateUser(1,changes).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.user_id).toBe(1);
    });
    const mockReq = testingController.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('PUT');
    let modifiedUser = USERS[1];
    modifiedUser.email = "mota69@gmail.com";
    expect(mockReq.request.body.email).toEqual("mota69@gmail.com")
    mockReq.flush(modifiedUser);
  });

  afterEach(() => {
    testingController.verify();
  });
});
