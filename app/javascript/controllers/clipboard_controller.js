import { Controller } from "@hotwired/stimulus"
import ClipboardController from "./clipboard_controller";
application.register("clipboard", ClipboardController)
export default class extends Controller {
    static targets = ["email"]
    copy() {
        navigator.clipboard.writeText(this.emailTarget.textContent);
        $(".notice:eq(0)").text('copy email: ' + this.emailTarget.textContent);
    }
}
