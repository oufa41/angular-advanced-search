export class ObjectUtils {

    public static deepCopy(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }

    public static jsonEqual(objA: any, objB: any): boolean {
        return JSON.stringify(objA) === JSON.stringify(objB);
    }

}
