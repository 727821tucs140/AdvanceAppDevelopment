package com.yoga.yoga.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AcademyRequest {
    private String academyName;
    private String academyDescription;
    private String academyLocation;
    private String email;
}
