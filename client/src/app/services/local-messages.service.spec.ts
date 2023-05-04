import { TestBed } from '@angular/core/testing';
import { PlayerIndex } from '@app/components/game-data';
import { MessageType } from './game-message';

import { LocalMessagesService } from './local-messages.service';

describe('LocalMessagesService', () => {
    let service: LocalMessagesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocalMessagesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add a chat message to messages array', () => {
        const player = PlayerIndex.Player1;
        const message = 'Hello World';
        service.addChatMessage(player, message);
        expect(service.messages.length).toBe(1);
        expect(service.messages[0].player).toBe(player);
        expect(service.messages[0].type).toBe(MessageType.Chat);
        expect(service.messages[0].value).toBe(message);
    });

    it('should add a global message to messages array', () => {
        const message = 'Hello World';
        service.add(message);
        expect(service.messages.length).toBe(1);
        expect(service.messages[0].player).toBe(PlayerIndex.None);
        expect(service.messages[0].type).toBe(MessageType.NewRecord);
        expect(service.messages[0].value).toBe(message);
    });

    it('should correctly clear messages array', () => {
        service.reset();
        expect(service.messages).toEqual([]);
    });
});
