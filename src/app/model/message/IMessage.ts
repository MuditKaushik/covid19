export interface IMessage {
    message: string;
    type: 'error' | 'success' | 'info' | 'warn';
    status?: number;
}
