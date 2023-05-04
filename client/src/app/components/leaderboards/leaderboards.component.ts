import { Component, Input } from '@angular/core';
import { TimeFormatting } from '@app/classes/time-formatting';
import { TopPlayer } from '@common/game';

@Component({
    selector: 'app-leaderboards',
    templateUrl: './leaderboards.component.html',
    styleUrls: ['./leaderboards.component.scss'],
})
export class LeaderboardsComponent {
    @Input() solo: object[];
    @Input() multi: object[];
    displayedColumns: string[] = ['position', 'player-name', 'record-time'];
    time: TimeFormatting = new TimeFormatting();
    placeholderSolo: TopPlayer[] = [
        { playerName: 'Lorem', recordTime: 213 },
        { playerName: 'Ipsum', recordTime: 581 },
        { playerName: 'Dolor', recordTime: 609 },
    ];
    placeholderMulti: TopPlayer[] = [
        { playerName: 'Lorem', recordTime: 213 },
        { playerName: 'Ipsum', recordTime: 581 },
        { playerName: 'Dolor', recordTime: 609 },
    ];
    // TODO: remove these placeholders
}
