export abstract class ItemRepository {
  abstract create(name: string, type: number): Promise<void>;
}
