import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class SeoService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
  ) { }
  public addSeoData(): void {

    this.router.events.filter((event: any) => event instanceof NavigationEnd).subscribe(() => {

      let root = this.router.routerState.snapshot.root;

      while (root) {

        if (root.children && root.children.length) {

          root = root.children[0];

        } else if (root.data && root.data['title']) {
          this.titleService.setTitle(root.data['title'] + ' | Camex');
          const tags = root.data['metatags'];
          // tslint:disable-next-line:forin
          for (let tag in tags) {
            this.metaService.addTag({ name: tag, content: tags[tag] });
          }
          return;
        } else {
          return;
        }
      }
    });

  }
  public addSeoDetail(data: any) {
    let baseUrl = window.location.href;
    let newTags: MetaDefinition[] = [
      {
        property: 'og:type',
        content: baseUrl,
      },
      {
        property: 'og:title',
        content: data.titulo
      },
      {
        property: 'og:description',
        content: data.descripcion
      },
      {
        property: 'og:image',
        content: data.imagen
      }
    ];
    if (!this.metaService.getTags('property')) {
      this.metaService.addTags(newTags);
    } else {
      newTags.forEach(tag => {
        this.metaService.updateTag(tag);
      });
    }
  }
}
