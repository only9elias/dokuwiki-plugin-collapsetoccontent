<?php

/**
 * Action component for Collapse ToC Content
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author  only9elias
 */

use dokuwiki\Extension\ActionPlugin;
use dokuwiki\Extension\Event;
use dokuwiki\Extension\EventHandler;

class action_plugin_collapsetoccontent extends ActionPlugin
{
    /**
     * @param EventHandler $controller
     * @return void
     */
    public function register(EventHandler $controller)
    {
        $controller->register_hook('DOKUWIKI_STARTED', 'AFTER', $this, 'handleStarted');
    }

    /**
     * Expose plugin config to JavaScript via JSINFO.
     *
     * @param Event $event
     * @param mixed $param
     * @return void
     */
    public function handleStarted(Event $event, $param)
    {
        global $JSINFO;

        $enabled = (int)$this->getConf('enabled') ? 1 : 0;
        $openlevels = (int)$this->getConf('openlevels');
        if ($openlevels < 1) {
            $openlevels = 1;
        }
        if ($openlevels > 5) {
            $openlevels = 5;
        }

        $JSINFO['collapsetoccontent'] = [
            'enabled' => $enabled,
            'openlevels' => $openlevels,
        ];
    }
}
