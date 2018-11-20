package com.revature.beans;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "guest_id")
	private Guest guest;
	
	@OneToMany(mappedBy = "reservation",
			cascade = CascadeType.ALL)
	private List<OccupiedRoom> occupiedRooms = new ArrayList<>();
	
	@Column(name="date_in")
	private Date dateIn; // SQL date
	
	@Column(name="date_out")
	private Date dateOut; // SQL date
	
	@Column(name="made_by")
	private String madeBy;
	
//	@Column(name="guest_id") // connected to guest 
//	private int guestId;	 // might not be needed

}
