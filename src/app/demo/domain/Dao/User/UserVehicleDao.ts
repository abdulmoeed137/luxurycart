export class UserVehicleDao {
    userName: string;
    vehiclenumber: string;
    status: string;
    checkintime: Date;
    checkouttime: Date;  
}

export class userVehicleList {
    results: UserVehicleDao[]
    rowCount: number
}

export class UserVehicleListDao {

    userVehicleList: userVehicleList
}

export class UserVehicleDetailResp {
    status: boolean
    message: string
    data: UserVehicleListDao
}