import serverSideRender from '../../server/serverSideRender';

/**
 * Server-side handlers for Home
 */
export default class HomeServer {
  constructor(app) {
    app.get('/', (req, res, next) =>
      serverSideRender(req, res)
    );
  }
}
