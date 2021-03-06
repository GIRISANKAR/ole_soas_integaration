/*
 * Copyright 2011 The Kuali Foundation.
 * 
 * Licensed under the Educational Community License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.opensource.org/licenses/ecl2.php
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.kuali.ole.select.document.validation.impl;


import org.kuali.ole.module.purap.PurapPropertyConstants;
import org.kuali.ole.select.businessobject.OleRequisitionItem;
import org.kuali.ole.sys.document.validation.GenericValidation;
import org.kuali.ole.sys.document.validation.event.AttributedDocumentEvent;
import org.kuali.rice.kns.service.DictionaryValidationService;

public class PurchasingBibInfoAddItemValidation extends GenericValidation {

    private OleRequisitionItem itemForValidation;
    private DictionaryValidationService dictionaryValidationService;

    public boolean validate(AttributedDocumentEvent event) {
        return getDictionaryValidationService().isBusinessObjectValid(itemForValidation, PurapPropertyConstants.NEW_PURCHASING_ITEM_LINE);
    }

    public DictionaryValidationService getDictionaryValidationService() {
        return dictionaryValidationService;
    }

    public void setDictionaryValidationService(DictionaryValidationService dictionaryValidationService) {
        this.dictionaryValidationService = dictionaryValidationService;
    }

    public OleRequisitionItem getItemForValidation() {
        return itemForValidation;
    }

    public void setItemForValidation(OleRequisitionItem itemForValidation) {
        this.itemForValidation = itemForValidation;
    }

}

