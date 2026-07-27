/**
 * Collapse ToC Content — nested expand/collapse inside #dw__toc
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 */
jQuery(function () {
    'use strict';

    var conf = (typeof JSINFO !== 'undefined' && JSINFO.collapsetoccontent)
        ? JSINFO.collapsetoccontent
        : null;

    if (!conf || !conf.enabled) {
        return;
    }

    var $toc = jQuery('#dw__toc');
    if (!$toc.length) {
        return;
    }

    var openlevels = parseInt(conf.openlevels, 10);
    if (isNaN(openlevels) || openlevels < 1) {
        openlevels = 2;
    }

    /**
     * @param {jQuery} $li
     * @returns {number}
     */
    function getLevel($li) {
        var match = ($li.attr('class') || '').match(/\blevel(\d+)\b/);
        return match ? parseInt(match[1], 10) : 1;
    }

    /**
     * @param {jQuery} $li
     * @param {boolean} expanded
     */
    function setExpanded($li, expanded) {
        var $childUl = $li.children('ul');
        var $toggle = $li.children('.collapsetoccontent__toggle');

        $li.toggleClass('collapsetoccontent__collapsed', !expanded);
        $li.toggleClass('collapsetoccontent__open', expanded);
        $toggle.attr('aria-expanded', expanded ? 'true' : 'false');
        if (expanded) {
            $childUl.removeAttr('hidden');
        } else {
            $childUl.attr('hidden', 'hidden');
        }
    }

    $toc.find('li').each(function () {
        var $li = jQuery(this);
        var $childUl = $li.children('ul');
        if (!$childUl.length) {
            return;
        }

        // Avoid double-init if script runs more than once
        if ($li.children('.collapsetoccontent__toggle').length) {
            return;
        }

        var level = getLevel($li);
        var startExpanded = level < openlevels;

        var $toggle = jQuery('<button type="button" class="collapsetoccontent__toggle"></button>');
        $toggle.attr('aria-label', 'Toggle nested table of contents entries');
        $toggle.attr('title', 'Toggle nested entries');
        $toggle.append(jQuery('<span class="collapsetoccontent__icon" aria-hidden="true"></span>'));

        $toggle.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            setExpanded($li, $li.hasClass('collapsetoccontent__collapsed'));
        });

        var $divLi = $li.children('div.li').first();
        if ($divLi.length) {
            $divLi.prepend($toggle);
        } else {
            $li.prepend($toggle);
        }

        $li.addClass('collapsetoccontent__branch');
        setExpanded($li, startExpanded);
    });
});
