export class ClassNameRegex {
    private ClassNameRegex: RegExp = /^(C|A|P)[0-9]{4}[A-Z]$/;

    public validate(regex: string): boolean {
        return this.ClassNameRegex.test(regex);
    }
}