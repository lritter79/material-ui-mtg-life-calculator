export default interface CategoryInterface {
    id: number;
    name: string,
    startingLife: number;
    maxCommanderDamage?: number | null;
    isCommander: boolean;
}
