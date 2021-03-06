/*
 * Copyright (c) 2010-2015 Marand d.o.o. (www.marand.com)
 *
 * This file is part of Think!Med Clinical Medication Management.
 *
 * Think!Med Clinical Medication Management is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Think!Med Clinical Medication Management is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Think!Med Clinical Medication Management.  If not, see <http://www.gnu.org/licenses/>.
 */
Class.define('app.views.medications.reconciliation.dto.MedicationOnAdmission', 'app.views.medications.reconciliation.dto.MedicationGroupTherapy', {
  statics: {
    fromJson: function (jsonObject)
    {
      if (tm.jquery.Utils.isEmpty(jsonObject)) return null;

      return new app.views.medications.reconciliation.dto.MedicationOnAdmission({
        therapy: app.views.medications.common.TherapyJsonConverter.convert(jsonObject.therapy),
        status: jsonObject.status,
        sourceGroupEnum: jsonObject.sourceGroupEnum,
        sourceId: jsonObject.sourceId,
        changeReasonDto: app.views.medications.common.dto.TherapyChangeReason.fromJson(jsonObject.changeReasonDto)
      });
    }
  },
  status: null,  /* app.views.medications.TherapyEnums.medicationOnAdmissionStatus */

  readOnly: false,

  /* constructor */
  Constructor: function (config)
  {
    this.callSuper(config);
  },

  setReadyOnly: function(value)
  {
    this.readOnly = value;
  },
  setStatus: function(status)
  {
    this.status = status;
  },
  isReadOnly: function()
  {
    return this.readOnly;
  },

  /* status helpers*/
  isPending: function()
  {
    return this.status === app.views.medications.TherapyEnums.medicationOnAdmissionStatus.PENDING;
  },
  isAborted: function()
  {
    return this.status === app.views.medications.TherapyEnums.medicationOnAdmissionStatus.ABORTED;
  },
  isPrescribed: function()
  {
    return this.status === app.views.medications.TherapyEnums.medicationOnAdmissionStatus.PRESCRIBED;
  },
  isSuspended: function()
  {
    return this.status === app.views.medications.TherapyEnums.medicationOnAdmissionStatus.SUSPENDED;
  }
});