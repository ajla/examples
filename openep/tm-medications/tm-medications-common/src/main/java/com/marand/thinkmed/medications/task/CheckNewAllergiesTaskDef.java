/*
 * Copyright (c) 2010-2016 Marand d.o.o. (www.marand.com)
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

package com.marand.thinkmed.medications.task;

import com.marand.thinkmed.medications.TaskTypeEnum;
import com.marand.thinkmed.process.definition.TaskVariable;

/**
 * @author Nejc Korasa
 */
public class CheckNewAllergiesTaskDef extends MedsTaskDef
{
  private static final TaskTypeEnum taskTypeEnum = TaskTypeEnum.CHECK_NEW_ALLERGIES;

  public static final CheckNewAllergiesTaskDef INSTANCE = new CheckNewAllergiesTaskDef();
  public static final String TASK_EXECUTION_ID = taskTypeEnum.getName();
  public static final String KEY_PREFIX = "CHECK_NEW_ALLERGIES_TASK_PATIENT_ID";

  public static final TaskVariable NEW_ALLERGIES = TaskVariable.named("newAllergiesCodes");

  @Override
  public String getTaskExecutionId()
  {
    return TASK_EXECUTION_ID;
  }

  public static TaskTypeEnum getTaskTypeEnum()
  {
    return taskTypeEnum;
  }
}
