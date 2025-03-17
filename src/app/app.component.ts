import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  sanitizer = inject(DomSanitizer);
  value = `Hello!<img src="none" onerror="alert('This data has become code!')">`;
  renderedValue = "";
  unsafeRenderedValue!: SafeHtml;

  @ViewChild("divRender3") div!: ElementRef;

  renderData() {
    // Div 1
    this.renderedValue = this.value;

    // Div 2
    this.unsafeRenderedValue = this.sanitizer.bypassSecurityTrustHtml(
      this.value
    );

    // Div 3
    this.div.nativeElement.innerHTML = this.value;
  }
}
