import Realm, {BSON} from 'realm';

export class ChargingPoint extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId();
    location!: string;
    chargerType!: string;
    status!: string;
    createdAt: Date = new Date();

    static primaryKey = '_id';
}
