export class EmailRegex {

    private EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

    public validate(regex: string): boolean {
        return this.EMAIL_REGEX.test(regex);
    }
}