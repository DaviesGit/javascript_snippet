function find_object_location(object, global, deep) {
    deep = deep ? deep : -1;
    global = global ? global : window;
    var all_sub_object = []; //include all type object (String Number. . . . . )
    var find_result = [];
    // {
    //     object: null,
    //     locations: [
    //         ['sub1', 0, , , , ],
    //         [, , , , , ]
    //     ]
    // }

    var _variable_type_object = [];

    var variable_type_object = [
        '[object Object]',
        '[object Array]',
        '[object Window]',
        '[object Function]',
        '[object Symbol]',
        '[object WeakMap]',
        '[object ApplicationCache]',
        '[object BarProp]',
        '[object Crypto]',
        '[object CustomElementRegistry]',
        '[object DeprecatedStorageInfo]',
        '[object External]',
        '[object History]',
        '[object HTMLDocument]',
        '[object IDBFactory]',
        '[object Location]',
        '[object Navigator]',
        '[object Performance]',
        '[object Screen]',
        '[object SpeechSynthesis]',
        '[object Storage]',
        '[object StyleMedia]',
        '[object VisualViewport]',
        '[object DOMStringList]',
        '[object DOMImplementation]',
        '[object DocumentType]',
        '[object HTMLHtmlElement]',
        '[object HTMLBodyElement]',
        '[object HTMLHeadElement]',
        '[object HTMLCollection]',
        '[object HTMLAllCollection]',
        '[object FontFaceSet]',
        '[object StyleSheetList]',
        '[object NodeList]',
        '[object Geolocation]',
        '[object MediaDevices]',
        '[object NetworkInformation]',
        '[object PluginArray]',
        '[object MimeTypeArray]',
        '[object DeprecatedStorageQuota]',
        '[object BudgetService]',
        '[object Permissions]',
        '[object Presentation]',
        '[object MediaCapabilities]',
        '[object ScreenOrientation]',
        '[object MemoryInfo]',
        '[object PerformanceNavigation]',
        '[object PerformanceTiming]',
        '[object DOMStringMap]',
        '[object CSSStyleDeclaration]',
        '[object DOMTokenList]',
        '[object NamedNodeMap]',
        '[object StylePropertyMap]',
        '[object HTMLDivElement]',
        '[object HTMLScriptElement]',
        '[object HTMLAnchorElement]',
        '[object HTMLIFrameElement]',
        '[object HTMLMetaElement]',
        '[object HTMLTitleElement]',
        '[object HTMLStyleElement]',
        '[object HTMLLinkElement]',
        '[object HTMLImageElement]',
        '[object HTMLElement]',
        '[object HTMLSpanElement]',
        '[object HTMLInputElement]',
        '[object HTMLPreElement]',
        '[object HTMLButtonElement]',
        '[object HTMLLabelElement]',
        '[object HTMLParagraphElement]',
        '[object Promise]',
        '[object CSSStyleSheet]',
        '[object Attr]',
        '[object Comment]',
        '[object CSSRuleList]',
        '[object MediaList]',
        '[object Set]',
        '[object Text]',
        '[object ValidityState]',
        '[object CSSFontFaceRule]',
        '[object CSSKeyframesRule]',
        '[object CSSStyleRule]',
        '[object CSSKeyframeRule]',
        '[object Map]',
        '[object HTMLBRElement]',
        '[object HTMLDialogElement]',
        '[object HTMLFormElement]',
        '[object CSSMediaRule]',
        '[object HTMLTemplateElement]',
        '[object Plugin]',
        '[object MimeType]',
        '[object Clipboard]',
        '[object CredentialsContainer]',
        '[object Keyboard]',
        '[object ServiceWorkerContainer]',
        '[object StorageManager]',
        '[object LockManager]',
        '[object USB]',
        '[object SubtleCrypto]',
        '[object CacheStorage]',
        '[object Error]',
        '[object IDBDatabase]',
        '[object SpeechRecognition]',
        '[object HTMLTableElement]',
        '[object HTMLFormControlsCollection]',
        '[object HTMLVideoElement]',
        '[object HTMLUListElement]',
        '[object HTMLHeadingElement]',
        '[object HTMLTableCellElement]',
        '[object HTMLLIElement]',
        '[object HTMLTableSectionElement]',
        '[object HTMLTableRowElement]',
        '[object Date]',
        '[object HTMLOListElement]',
        '[object HTMLSelectElement]',
        '[object HTMLFieldSetElement]',
        '[object CSSSupportsRule]',
        '[object CSSPageRule]',
        '[object CSSImportRule]',
        '[object HTMLOptionElement]',
        '[object Arguments]',
        '[object HTMLHRElement]',
        '[object MutationObserver]',
        '[object SVGSVGElement]',
        '[object SVGGElement]',
        '[object SVGCircleElement]',
        '[object SVGPathElement]',
        '[object HTMLOptionsCollection]',
        '[object SVGAnimatedLength]',
        '[object SVGPoint]',
        '[object SVGAnimatedRect]',
        '[object SVGAnimatedPreserveAspectRatio]',
        '[object SVGAnimatedTransformList]',
        '[object SVGStringList]',
        '[object SVGAnimatedString]',
        '[object SVGTitleElement]',
        '[object SVGAnimatedNumber]',
        '[object HTMLDetailsElement]',
        '[object HTMLTimeElement]',
        '[object HTMLMenuElement]',
        '[object HTMLUnknownElement]',
        '[object SVGLength]',
        '[object SVGRect]',
        '[object SVGPreserveAspectRatio]',
        '[object SVGTransformList]',
        '[object HTMLAudioElement]',
        '[object HTMLCanvasElement]',
        '[object HTMLSourceElement]',
        '[object WebGLTexture]',
        '[object WebGLRenderingContext]',
        '[object WebGLProgram]',
        '[object WebGLUniformLocation]',
        '[object Float32Array]',
        '[object Uint16Array]',
        '[object WebGLBuffer]',
        '[object ArrayBuffer]',
        '[object Uint32Array]',
        '[object MouseEvent]',
        '[object CanvasRenderingContext2D]',
        '[object SVGDefsElement]',
        '[object SVGTransform]',
        '[object SVGMaskElement]',
        '[object SVGRectElement]',
        '[object SVGPolygonElement]',
        '[object SVGPolylineElement]',
        '[object SVGLineElement]',
        '[object SVGEllipseElement]',
        '[object SVGUseElement]',
        '[object TimeRanges]',
        '[object TextTrackList]',
        '[object RemotePlayback]',
    ]

    var variable_type_plain = [
        '[object String]',
        '[object Number]',
        '[object Boolean]',
        '[object Undefined]',
        '[object Null]',
        '[object RegExp]'
    ]


    function formate_result(result) {
        result.forEach(function(ele) {
            ele.locations_string = [];
            ele.locations.forEach(function(_ele) {
                ele.locations_string.push(_ele.join('.'));
            });
        });
        return result;
    }

    function formate_path_array(path_array) {
        var path_string = [];
        path_array.forEach(function(ele) {
            path_string.push(ele.join('.'));
        });
        return path_string;
    }

    function get_object(global, location) {
        var temp_object = global;
        location.forEach(function(ele) {
            temp_object = temp_object[ele];
        });
        return temp_object;
    }

    //if duplicate, it will been add to object location;
    function _is_duplicate(object, current_location) {
        for (var ele of all_sub_object) {
            if (ele.object === object) {
                ele.locations.push(current_location);
                return true;
            }
        }
        return false;
    }

    function _get_object_locations(object) {
        for (var ele of all_sub_object) {
            if (ele.object === object) {
                return ele.locations;
            }
        }
    }

    function _is_in_child_object(object, current_reverse_location) {
        var location = current_reverse_location.slice().reverse();
        var temp_object = object;
        for (ele of location) {
            temp_object = temp_object[ele];
            if (temp_object === object) {
                return true;
            }
        }
        return false;
    }

    function _expand_to_all_locations(result) {
        var _locations = [];
        var locations = [];
        result.forEach(function(ele) {
            ele.locations.forEach(function(ele) {
                _locations.push(ele);
            });
        });
        _locations.forEach(function(ele) {
            var location = ele.slice();
            var current_reverse_location = [location.pop()];
            if (0 === location.length) {
                locations.push(ele);
                return;
            }
            var parent = get_object(global, location);



            function _reverse_get_parent_object(object, current_reverse_location) {
                var _locations = _get_object_locations(object);
                _locations.forEach(function(ele) {
                    var location = ele.slice();
                    var current_reverse_location_deep = current_reverse_location.slice();
                    if (_is_in_child_object(object, current_reverse_location_deep)) {
                        return;
                    }
                    current_reverse_location_deep.push(location.pop());
                    if (current_reverse_location_deep.length > deep) {
                        return;
                    }
                    if (0 === location.length) {
                        locations.push(current_reverse_location_deep.reverse());
                        return;
                    }
                    var parent = get_object(global, location);
                    _reverse_get_parent_object(parent, current_reverse_location_deep);
                });
            }
            _reverse_get_parent_object(parent, current_reverse_location);

        });
        return locations;
    }

    function get_minimum_length_elements(array) {
        var current_minimum_length = array[0].length;
        var current_minimum = [];
        array.forEach(function(ele) {
            if (ele.length < current_minimum_length) {
                current_minimum_length = ele.length;
                current_minimum = [ele];
            } else if (ele.length === current_minimum_length) {
                current_minimum.push(ele);
            }
        });
        return current_minimum;
    }

    function _get_nearest_path(object) {
        var nearest_path = [];
        var locations = _get_object_locations(object);
        var minimum = get_minimum_length_elements(locations);
        var current_miminum_deep = minimum[0].length;

        function _reverse_get_parent_object(object, current_reverse_location) {
            var _locations = _get_object_locations(object);
            _locations.forEach(function(ele) {
                var location = ele.slice();
                var current_reverse_location_deep = current_reverse_location.slice();
                if (_is_in_child_object(object, current_reverse_location_deep)) {
                    return;
                }
                current_reverse_location_deep.push(location.pop());
                var current_deep = ele.length + current_reverse_location.length;
                if (current_miminum_deep > current_deep) {
                    current_miminum_deep = current_deep;
                }
                if (current_reverse_location_deep.length > current_miminum_deep) {
                    return;
                }
                if (0 === location.length) {
                    var current_location = current_reverse_location_deep.reverse();
                    current_miminum_deep.current_location;
                    nearest_path.push(current_location);
                    return;
                }
                var parent = get_object(global, location);
                _reverse_get_parent_object(parent, current_reverse_location_deep);
            });
        }
        _reverse_get_parent_object(object, []);
        return get_minimum_length_elements(nearest_path);
    }

    function _find_sub(global, current_location) {
        if (-1 !== deep && current_location.length > deep) {
            return;
        }
        var is_duplicate = _is_duplicate(global, current_location);
        if (!is_duplicate) {
            all_sub_object.push({
                object: global,
                locations: [current_location]
            });
        }
        var object_type = Object.prototype.toString.call(global);
        if (variable_type_object.includes(object_type)) {
            if (object === global) {
                find_result.push({
                    object: global,
                    locations: [current_location]
                });
            }
            if (!is_duplicate) {
                try {
                    for (var property in global) {
                        var _current_location = current_location.slice();
                        _current_location.push(property);
                        _find_sub(global[property], _current_location);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        } else if (variable_type_plain.includes(object_type)) {
            if (object === global) {
                find_result.push({
                    object: global,
                    locations: [current_location]
                });
            }
        } else {
            if (!_variable_type_object.includes(object_type)) {
                _variable_type_object.push(object_type);
            }
            /*            console.error(Object.prototype.toString.call(global)
                            {
                                                error: 'unknown object type!',
                                                type:Object.prototype.toString.call(global),
                                                object: global,
                                                location: [current_location]
                                            }
                        );
            */
        }
    }
    _find_sub(global, []);
    console.log(_variable_type_object);
    console.log('iterate objects amount is: ' + all_sub_object.length);
    console.log(find_result);
    return formate_path_array(_get_nearest_path(object));
}