import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DashboardComponentComponent } from './dashboard-component.component';

let component: DashboardComponentComponent;
let fixture: ComponentFixture<DashboardComponentComponent>;

describe('dashboard-component component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DashboardComponentComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DashboardComponentComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});