import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class LocalOnlyGuard implements CanActivate {
  canActivate(): boolean {
    const host = window.location.hostname;
    console.log("Host:", host);
    return host === 'localhost' || host === '127.0.0.1';
  }
}
