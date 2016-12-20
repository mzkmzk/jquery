define( function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE 元素
	//    - Node.DOCUMENT_NODE document
	//  - Object
	//    - Any 任意的对象 如果是对象 owner.nodeType为undefined + 之后 就会变成NaN, 然后取非就是true 判断是否不是有效的数字 ,排除其他的node对象
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

} );
