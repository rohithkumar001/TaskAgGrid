import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
// ag-grid
import { AgGridModule } from "@ag-grid-community/angular";
// application
import { AppComponent } from "./app.component";
// rich grid
import { RichGridComponent } from "./rich-grid-example/rich-grid.component";
import { SortableHeaderComponent } from "./header-component/sortable-header.component";
import { HeaderGroupComponent } from "./header-group-component/header-group.component";
import { RendererComponent } from './renderer-component/renderer.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
               
                SortableHeaderComponent,
                HeaderGroupComponent,
                RendererComponent
            ]
        )
    ],
    declarations: [
        AppComponent,
        RichGridComponent,
        
        SortableHeaderComponent,
        HeaderGroupComponent,
        RendererComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
